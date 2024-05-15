import Container from "@/app/components/Container";

import NullData from "@/app/components/Nulldata";

import ManageOrdersClient from "./ManageOrdersClient";
import getCurrentUser from "@/action/getCurrentUser";
import getOrders from "@/action/getOrders";

const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="ACCESS DENIED" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
