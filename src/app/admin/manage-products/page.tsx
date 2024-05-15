import Container from "@/app/components/Container";
import ManageProductClient from "./ManageProductClient";
import getProducts from "../../../action/getProducts";

import NullData from "@/app/components/Nulldata";
import getCurrentUser from "@/action/getCurrentUser";

const ManageProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="ACCESS DENIED" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageProductClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
