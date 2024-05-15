"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";

interface SetSeatProps {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  handleSeatSelect: (value: SelectedImgType) => void;
}

const SetSeat: React.FC<SetSeatProps> = ({
  images,
  cartProduct,
  handleSeatSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">SEAT CATEGORY :</span>
        <div className="flex gap-1 ">
          {images.map((image) => {
            return (
              <div
                key={image.seatcategory}
                onClick={() => handleSeatSelect(image)}
                className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${
                  cartProduct.selectedImg.seatcategory === image.seatcategory
                    ? "border-[1.5px]"
                    : "border-none"
                }`}
              >
                <div
                  style={{ background: image.colorCode }}
                  className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetSeat;
