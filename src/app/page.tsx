import { events } from "@/utils/events";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { truncateText } from "@/utils/truncateText";
import EventCard from "./components/events/EventCard";

export default function Home() {
  return (
    <div className="p-8 ">
      <h1>
        <Container>
          <div>
            <HomeBanner />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {events.map((event: any) => {
              return <EventCard data={event} />;
            })}
          </div>
        </Container>
      </h1>
    </div>
  );
}
