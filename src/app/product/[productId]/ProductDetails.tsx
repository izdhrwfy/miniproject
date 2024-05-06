"use client";
import Button from "../../components/Button";
import SetQuantity from "@/app/components/events/SetQuantity";
import { useCart } from "@/app/hooks/useCart";
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
  category: string;
  brand: string;
  quantity: number;
  price: number;
  images: any;
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
    category: event.category,
    brand: event.brand,
    quantity: 1,
    price: event.price,
    images: event.image,
  });

  const router = useRouter();
  console.log(cartProducts);

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
      <div>{event.image}</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{event.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={eventRating} readOnly />
          <div>{event.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{event.description}</div>
        <Horizontal />

        <div>
          <span className="font-semibold ">CATEGORY:</span> {event.category}
        </div>
        <div>
          <span className="font-semibold ">BRAND:</span> {event.brand}
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
