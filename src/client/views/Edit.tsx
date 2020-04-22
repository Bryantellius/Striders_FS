import * as React from "react";
import { useParams } from "react-router";

const Edit: React.FC<EditProps> = () => {
  const { activityId } = useParams();
  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Edit View {activityId}</h1>
        </div>
      </section>
    </main>
  );
};

export interface EditProps {}

export default Edit;
