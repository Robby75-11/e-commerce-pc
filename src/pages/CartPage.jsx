import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>🛒 Carrello</h2>

      {cart.length === 0 ? (
        <p>Il tuo carrello è vuoto.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ height: "50px", objectFit: "contain" }}
                    className="me-3"
                  />
                  <span>
                    {item.title} <strong>(x{item.quantity})</strong>
                  </span>
                </div>
                <span>
                  €{(item.price * item.quantity).toFixed(2)}
                  <button
                    className="btn btn-sm btn-danger ms-3"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Rimuovi
                  </button>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-3 d-flex justify-content-between align-items-center">
            <h4>Totale: €{totalPrice.toFixed(2)}</h4>
            <div>
              <button
                className="btn btn-outline-danger me-2"
                onClick={() => dispatch(clearCart())}
              >
                Svuota carrello
              </button>
              <button className="btn btn-success">Procedi al pagamento</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
