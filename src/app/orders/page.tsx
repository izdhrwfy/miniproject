import Container from "@/app/components/Container";
import OrdersClient from "./OrderClients";

import NullData from "@/app/components/Nulldata";

import getCurrentUser from "@/action/getCurrentUser";
import getOrdersByUserId from "@/action/getOrdersByUserId";

const Orders = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="ACCESS DENIED" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No Orders yet..." />;
  }

  return (
    <div className="pt-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
