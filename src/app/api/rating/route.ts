import { NextResponse } from "next/server";

import { Review } from "@prisma/client";
import getCurrentUser from "@/action/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { comment, rating, product, userId } = body;

  // const watchedEvent = currentUser?.orders.some(
  //   (order) =>
  //     order.products.find((item) => item.id === product.id) &&
  //     order.paymentIntentId === "complete"
  // );

  // const userReview = product?.review.find((review: Review) => {
  //   return review.userId === currentUser.id;
  // });

  // if (userReview || !watchedEvent) {
  //   return NextResponse.error();
  // }

  const review = await prisma?.review.create({
    data: {
      comment,
      rating,
      productId: product.id,
      userId,
    },
  });

  return NextResponse.json(review);
}
