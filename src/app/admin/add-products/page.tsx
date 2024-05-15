import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddProductForm from "./AddProductForm";
import getCurrentUser from "../../../action/getCurrentUser";
import NullData from "@/app/components/Nulldata";

const AddProducts = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="ACCESS DENIED" />;
  }

  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
