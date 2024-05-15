import { events } from "@/utils/events";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { truncateText } from "@/utils/truncateText";
import EventCard from "./components/events/EventCard";
import getProducts, { IProductParams } from "../action/getProducts";
import NullData from "./components/Nulldata";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <NullData title='Sorry, No products found! Click "All" to clear filters' />
    );
  }

  //Fisher-Yates shuffle algoritma

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const shuffledProduct = shuffleArray(products);

  return (
    <div className="p-8 ">
      <h1>
        <Container>
          <div>
            <HomeBanner />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {shuffledProduct.map((event: any) => {
              return <EventCard data={event} />;
            })}
          </div>
        </Container>
      </h1>
    </div>
  );
}
