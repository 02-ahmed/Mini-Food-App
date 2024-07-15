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
  quantity: number
  id:number
  total?:number
}

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product:Product) => {
    const existingProduct = cart.find(item => item.id === product.id)
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? {...item, quantity:item.quantity + 1}:item))
    }else {
      setCart([...cart, {...product,}])
    }

    console.log(cart)
  }

  let total = 0;
  cart.forEach(item => total = total + (item.price*item.quantity))

  let quantityTotal = 0;
  cart.forEach(item => quantityTotal += item.quantity)

  const handleDelete = (item:Product) => {
    setCart(cart.filter((cartItem) => (cartItem.id !== item.id)))
    console.log(cart)
  }

  return (
    <>
      <Title />
      <div className="conatainer-fluid ps-5 pe-5">
        <div className="row">
          <div className="col-12 col-md-8 mt-5">
            <Products handleClick={addToCart} />
          </div>
          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <Summary cart={cart} total={total} quantityTotal={quantityTotal} handleDelete={handleDelete}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
