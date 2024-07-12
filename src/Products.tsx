/* import { useState } from "react"; */
import data from "./data.json";
/* import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
 */
export interface Product {
  image: { thumbnail: string };
  name: string;
  category: string;
  price: number;
}

interface Props {
  handleClick: (cartItem: Product) => void;
}

const Products = ({ handleClick }: Props) => {
  const products = data;
  return (
    <>
      <div className="container-fluid">
        <div className="row row-gap-3">
          {products.map((product) => (
            <div className="col-12 col-md-4">
              <div
                className="card"
                style={{
                  overflow: "hidden",
                  background: "none",
                  border: "none",
                }}
              >
                <div className="card-head">
                  <img
                    src={product.image.mobile}
                    alt=""
                    width="100%"
                    className="rounded-4"
                    style={{ position: "relative" }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      left: "27%",
                      bottom: "120px",
                      zIndex: "3",
                      transform: "translate(-50% 50%)",
                      whiteSpace: "nowrap",
                      borderColor: "hsl(14, 86%, 42%)",
                    }}
                    className="btn btn-light rounded-pill"
                    onClick={() => {
                      handleClick(product);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="card-body mt-3">
                  <p className="m-0">{product.category}</p>
                  <p className="m-0">{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
