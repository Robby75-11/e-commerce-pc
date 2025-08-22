import { useState } from "react";

export default function BackOfficeOrders() {
  const [ordini, setOrdini] = useState([
    {
      id: 101,
      utente: "Mario Rossi",
      data: "2025-08-20",
      totale: 149.99,
      stato: "Confermato",
    },
    {
      id: 102,
      utente: "Luca Bianchi",
      data: "2025-08-21",
      totale: 79.5,
      stato: "In elaborazione",
    },
    {
      id: 103,
      utente: "Giulia Verdi",
      data: "2025-08-22",
      totale: 249.0,
      stato: "Spedito",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Sei sicuro di voler eliminare questo ordine?")) {
      setOrdini(ordini.filter((o) => o.id !== id));
    }
  };

  const handleDetails = (ordine) => {
    alert(
      `📦 Dettagli ordine #${ordine.id}\n` +
        `Utente: ${ordine.utente}\n` +
        `Data: ${ordine.data}\n` +
        `Totale: €${ordine.totale}\n` +
        `Stato: ${ordine.stato}`
    );
  };

  return (
    <div className="container mt-4">
      <h2>🧾 Gestione Ordini</h2>
      <p>Qui potrai gestire e monitorare gli ordini effettuati.</p>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID Ordine</th>
            <th>Utente</th>
            <th>Data</th>
            <th>Totale (€)</th>
            <th>Stato</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {ordini.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.utente}</td>
              <td>{o.data}</td>
              <td>{o.totale}</td>
              <td>{o.stato}</td>
              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => handleDetails(o)}
                >
                  Dettagli
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(o.id)}
                >
                  Elimina
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
