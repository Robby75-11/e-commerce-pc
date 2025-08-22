export default function BackOfficeUsers() {
  const utenti = [
    { id: 1, nome: "Mario Rossi", email: "mario@example.com", ruolo: "Utente" },
    {
      id: 2,
      nome: "Luca Bianchi",
      email: "luca@example.com",
      ruolo: "Amministratore",
    },
    {
      id: 3,
      nome: "Giulia Verdi",
      email: "giulia@example.com",
      ruolo: "Utente",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>👤 Gestione Utenti</h2>
      <p>Qui potrai visualizzare e gestire gli utenti registrati.</p>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ruolo</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {utenti.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nome}</td>
              <td>{u.email}</td>
              <td>{u.ruolo}</td>
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
