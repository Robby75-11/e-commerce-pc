import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Errore nel caricamento del prodotto.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Nessun prodotto trovato.</p>; // 👈 evita crash

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <div className="row">
        <div className="col-md-6">
          {/* Thumbnail principale */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid mb-3"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          {/* Galleria immagini */}
          <div className="d-flex flex-wrap gap-2">
            {product.images &&
              product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.title} ${i}`}
                  className="img-thumbnail"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              ))}
          </div>
        </div>
        <div className="col-md-6">
          <h4>€{product.price}</h4>
          <p>{product.description}</p>
          <p>
            <strong>Categoria:</strong> {product.category}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <Button
            variant="primary"
            onClick={() => dispatch(addToCart(product))}
          >
            🛒 Aggiungi al carrello
          </Button>
        </div>
      </div>
    </div>
  );
}
