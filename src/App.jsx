import React from "react";
import ListProduct from "./components/ListProduct";
import Checkout from "./components/Checkout";

export default function App() {
  // Đây là khu vực viết code js
  const number = 10;
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <ListProduct></ListProduct>
                    <Checkout></Checkout>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
