import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { events } from "@/utils/events";

import NullData from "@/app/components/Nulldata";
import AddRating from "./AddRating";
import getProductById from "@/action/getProductById";
import getCurrentUser from "@/action/getCurrentUser";

interface IPrams {
  productId?: string;
}

const Product = async ({ params }: { params: IPrams }) => {
  const event = await getProductById(params);
  const user = await getCurrentUser();

  if (!event) return <NullData title="We couldn't find the product" />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails event={event} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={event} user={user} />
          <div>
            <ListRating event={event} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
