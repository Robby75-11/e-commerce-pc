// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <p className="mb-0">
        © {new Date().getFullYear()} Il Mio Shop - Tutti i diritti riservati
      </p>
    </footer>
  );
}
