"use client";
import EventImage from "@/app/components/events/EventImage";
import Button from "../../components/Button";
import SetQuantity from "@/app/components/events/SetQuantity";
import SetSeat from "@/app/components/events/SetSeat";
import { useCart } from "../../../hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
  event: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  brand: string;
  quantity: number;
  price: number;
  selectedImg: SelectedImgType;
};

export type SelectedImgType = {
  seatcategory: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ event }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: event.id,
    name: event.name,
    description: event.description,
    date: event.date,
    time: event.time,
    location: event.location,
    category: event.category,
    brand: event.brand,
    quantity: 1,
    price: event.price,
    selectedImg: { ...event.images[0] },
  });

  const router = useRouter();

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === event.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const eventRating =
    event.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    event.reviews.length;

  const handleSeatSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
      <EventImage
        cartProduct={cartProduct}
        product={event}
        handleSeatSelect={handleSeatSelect}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h3 className="text-3xl font-medium text-slate-700">{event.name}</h3>
        <div className="flex items-center gap-2">
          <Rating value={eventRating} readOnly />
          <div>{event.reviews.length} reviews</div>
        </div>
        <div className="flex items-center mt-5 my-2">
          <h2 className="text-3xl text-black font-bold">
            {formatPrice(event.price)}
          </h2>
        </div>
        <div
          className={
            event.inStock
              ? "text-green-500 font-extrabold"
              : "text-rose-400 font-extrabold"
          }
        >
          {event.inStock ? "In stock" : "Out of stock"}
        </div>

        <Horizontal />
        <div className="text-justify">
          <span className="font-semibold ">DESCRIPTION:</span>
          <div className="mt-2">{event.description}</div>
        </div>
        <Horizontal />

        <div>
          <span className="font-semibold ">CATEGORY: </span> {event.category}
        </div>
        <div>
          <span className="font-semibold ">BRAND: </span> {event.brand}
        </div>
        <div>
          <span className="font-semibold ">DATE: </span> {event.date}
        </div>
        <div>
          <span className="font-semibold ">TIME: </span> {event.time}
        </div>
        <div>
          <span className="font-semibold ">LOCATION: </span> {event.location}
        </div>
        <Horizontal />
        <SetSeat
          cartProduct={cartProduct}
          images={event.images}
          handleSeatSelect={handleSeatSelect}
        />
        <Horizontal />
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle className="text-cyan-500" size={20} />
              <span>Product added to Cart</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="View Cart"
                outline
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <SetQuantity
                cartProduct={cartProduct}
                handleQtyIncrease={handleQtyIncrease}
                handleQtyDecrease={handleQtyDecrease}
              />
            </div>
            <Horizontal />
            <div className="max-w-[300px]">
              <Button
                label="Add To Cart"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
