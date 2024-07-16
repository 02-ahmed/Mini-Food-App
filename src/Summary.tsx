import { Product } from "./Products";
import { CiCircleRemove } from "react-icons/ci";

interface Props {
  cart: Product[];
  total: number;
  quantityTotal:number
  handleDelete: (item:Product) => void
}

const Summary = ({ cart, total, quantityTotal, handleDelete }: Props) => {
  return (
    <div className="container-fluid bg-white rounded">
      <h3 className="text-danger">Your Cart {quantityTotal > 0 ? `(${quantityTotal})` : ""}</h3>
      <ul className="ps-0">
        {cart.map((item) => (
          <div className="mb-3">
            <li className="d-flex justify-content-between">
              <p className="m-0">{item.name}</p>
              <CiCircleRemove onClick={() => handleDelete(item)} type="button"  />
            </li>
            <div className="d-flex">
              <p className="me-2">{item.quantity}x</p>
              <p className="ms-2">@{item.price.toFixed(2)}</p>
              <p className="ms-2">${item.quantity && (item.quantity * item.price).toFixed(2)}</p>
            </div>
            <hr />
          </div>
        ))}
      </ul>
      <div className="d-flex justify-content-between">
        <p>Order Total</p>
        <h5 className="fw-bold">${total.toFixed(2)}</h5>
      </div>
      
    </div>
  );
};

export default Summary;
