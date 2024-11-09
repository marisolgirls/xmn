import { useState } from "react";
import Card from "./Card";

function App() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.length < 3 || productName.startsWith(" ") || description.length < 6) {
      setError(true);
      setSubmitted(false);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción del producto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>Por favor chequea que la información sea correcta.</p>}
      {submitted && !error && <Card productName={productName} description={description} />}
    </div>
  );
}

export default App;
