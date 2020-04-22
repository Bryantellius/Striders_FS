import * as React from "react";
import { useParams } from "react-router";

const SingleEntry: React.FC<SingleEntryProps> = () => {
  const { activityId } = useParams();

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Single Entry View {activityId}</h1>
        </div>
      </section>
    </main>
  );
};

export interface SingleEntryProps {}

export default SingleEntry;
