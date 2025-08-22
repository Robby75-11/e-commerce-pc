import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card className="h-100 shadow-sm">
      <div
        style={{
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={product.thumbnail} // 👈 cambiato
          alt={product.title}
          className="img-fluid"
          style={{ objectFit: "contain", height: "200px" }}
        />
      </div>
      <Card.Body>
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>

        {/* bottone carrello */}
        <Button
          variant="primary"
          className="me-2"
          onClick={() => dispatch(addToCart(product))}
        >
          Aggiungi al carrello
        </Button>

        {/* bottone dettagli */}
        <Link to={`/products/${product.id}`}>
          <Button variant="secondary">Dettagli</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
