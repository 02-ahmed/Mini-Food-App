import { useState } from "react";
import "./App.css";
import Products from "./Products";
import Summary from "./Summary";
import Title from "./Title";

interface Product {
  image: { thumbnail: string };
  name: string;
  category: string;
  price: number;
}

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <>
      <Title />
      <div className="conatainer-fluid ps-5 pe-5">
        <div className="row">
          <div className="col-12 col-md-8">
            <Products handleClick={(product) => setCart([...cart, product])} />
          </div>
          <div className="col-12 col-md-4 mt-3">
            <Summary cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
