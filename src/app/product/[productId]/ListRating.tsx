"use client";

import Avatar from "@/app/components/Avatar";
import Heading from "../../components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
  event: any;
}

const ListRating: React.FC<ListRatingProps> = ({ event }) => {
  return (
    <div>
      <Heading title="Event Review" />
      <div className="text-sm mt-2">
        {event.reviews &&
          event.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                <div className="flex gap-2 items.center">
                  <Avatar src={review?.user.image} />
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="font-light">
                    {moment(review.createDate).fromNow()}
                  </div>
                </div>
                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                  <div className="ml-2">{review.comment}</div>
                  <hr className="mt-4 mb-4" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
