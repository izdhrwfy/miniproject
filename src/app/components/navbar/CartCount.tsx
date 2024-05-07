"use client";
import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/navigation";
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
        <HiOutlineShoppingCart />
      </div>
      <span className="absolute top-[-10px] right-[-10px] bg-[#38B6FF] text-white h-5 w-5 rounded-full flex items-center justify-center text-xs ">
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
