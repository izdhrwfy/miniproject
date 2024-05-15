import Container from "@/app/components/Container";
import OrderDetails from "./OrderDetails";
import NullData from "@/app/components/Nulldata";
import getOrderById from "@/action/getOrderById";

interface IParams {
  orderId?: string;
}

const Order = async ({ params }: { params: IParams }) => {
  const order = await getOrderById(params);

  if (!order) return <NullData title="No order"></NullData>;
  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;
