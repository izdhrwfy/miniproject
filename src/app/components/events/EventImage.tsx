"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface EventImageProps {
  cartProduct: CartProductType;
  product: any;
  handleSeatSelect: (value: SelectedImgType) => void;
}

const EventImage: React.FC<EventImageProps> = ({
  cartProduct,
  product,
  handleSeatSelect,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer  h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.seatcategory}
              onClick={() => handleSeatSelect(image)}
              className={`relative w-[80%] aspect-square rounded-none border-teal-300 ${
                cartProduct.selectedImg.seatcategory === image.seatcategory
                  ? "border-[1.5px]"
                  : "border-none"
              }`}
            >
              <Image
                src={image.image}
                alt={image.seatcategory}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default EventImage;
