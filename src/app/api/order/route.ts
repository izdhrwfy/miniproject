// import getCurrentUser from "@/action/getCurrentUser";
// import prisma from "../../../../libs/prismadb";
// import { NextResponse } from "next/server";

// export async function PUT(request: Request) {
//   const currentUser = await getCurrentUser();

//   if (!currentUser) return NextResponse.error();

//   if (currentUser.role !== "ADMIN") {
//     return NextResponse.error();
//   }

//   const body = await request.json();
//   const { id, paymentStatus } = body;
//   const order = await prisma.order.update({
//     where: { id: id },
//     data: { paymentStatus },
//   });

//   return NextResponse.json(order);
// }
