export default function BackOfficeProducts() {
  const prodotti = [
    { id: 1, nome: "Laptop", prezzo: 999.99 },
    { id: 2, nome: "Smartphone", prezzo: 599.99 },
    { id: 3, nome: "Cuffie Bluetooth", prezzo: 129.99 },
  ];

  return (
    <div className="container mt-4">
      <h2>📦 Gestione Prodotti</h2>
      <p>
        Qui potrai aggiungere, modificare o eliminare i prodotti del negozio.
      </p>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Prezzo (€)</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {prodotti.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.prezzo}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Modifica
                </button>
                <button className="btn btn-danger btn-sm">Elimina</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
