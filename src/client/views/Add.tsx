import * as React from "react";

const Add: React.FC<AddProps> = () => {
  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Add View</h1>
        </div>
      </section>
    </main>
  );
};

export interface AddProps {}

export default Add;
