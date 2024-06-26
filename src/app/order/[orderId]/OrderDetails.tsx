"use client";

import { Order } from "@prisma/client";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/utils/formatPrice";
import { MdAccessTimeFilled, MdDone } from "react-icons/md";
import moment from "moment";
import { OrderItem } from "./OrderItem";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <>
      <div className="max-2-[1150px] m-auto flex flex-col gap-2">
        <div className="mt-8">
          <Heading title="Order Details" />
        </div>
        <div>Order ID: {order.id}</div>
        <div>
          Total Amount:
          <span className="font-bold">{formatPrice(order.amount)}</span>
        </div>
        <div className="flex gap-2 items-center">
          <div>Payment Status:</div>
          <div>
            {order.status === "pending" ? (
              <Status
                text="Pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : order.status === "complate" ? (
              <Status
                text="Completed"
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-700"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div>Date: {moment(order.createdDate).fromNow()}</div>
        <div>
          <h2 className="font-semibold mt-4 mb-2">Product orderd</h2>
          <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
            <div className="col-span-2 justify-start">PRODUCT</div>
            <div className=" justify-center">PRICE</div>
            <div className="justify-center">QTY</div>
            <div className=" justify-end">TOTAL</div>
          </div>
          {order.products &&
            order.products.map((item) => {
              return <OrderItem key={item.id} item={item}></OrderItem>;
            })}
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
