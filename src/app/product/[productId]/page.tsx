import Container from "@/app/components/Container";
import { event } from "@/utils/event";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);
  event;
  return (
    <div className="p-8">
      <Container>
        <ProductDetails event={event} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <div>
            <ListRating event={event} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;