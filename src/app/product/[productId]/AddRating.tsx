"use client";
import { Product, Review, Order } from "@prisma/client";
import { SafeUser } from "../../../../types";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Heading from "@/app/components/Heading";
import { Rating } from "@mui/material";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import toast from "react-hot-toast";
import axios from "axios";

interface AddRatingProps {
  product: Product & { reviews: Review[] };
  user: (SafeUser & { orders: Order[] }) | null;
}

const AddRating: React.FC<AddRatingProps> = ({ product, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      Comment: "",
      rating: 0,
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  if (!user || !product) return null;

  // const watchedEvent = user?.orders.some(
  //   (order) =>
  //     order.products.find((item) => item.id === product.id) &&
  //     order.paymentIntentId === "complete"
  // );

  // const userReview = product?.reviews.find((review: Review) => {
  //   return review.userId === user.id;
  // });

  // if (userReview || !watchedEvent) return null;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    if (data.rating === 0) {
      setIsLoading(false);
      return toast.error("No rating selected");
    }
    const ratingData = { ...data, userId: user?.id, product: product };

    axios
      .post("/api/rating", ratingData)
      .then(() => {
        toast.success("Rating submitted");
        router.refresh();
        reset();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-2 max-w-[500px]">
      <Heading title="Rate this Product" />
      <Rating
        onChange={(event, newValue) => {
          setCustomValue("rating", newValue);
        }}
      />
      <Input
        id="comment"
        label="Your Review"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button
        label={isLoading ? "Loading" : "Submit"}
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default AddRating;
