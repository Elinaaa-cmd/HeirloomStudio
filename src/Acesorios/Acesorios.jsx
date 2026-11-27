
import "./App.css";

function App() {
  const productos = [
    {
      nombre: "Aretes dorados",
      precio: "$340",
      imagen: "/images/aretes-dorados.png",
    },
    {
      nombre: "Aretes piedra",
      precio: "$200",
      imagen: "/images/aretes-piedra.png",
    },
    {
      nombre: "Mascada café con puntos",
      precio: "$155",
      imagen: "/images/mascada.png",
    },
    {
      nombre: "Aretes colgantes flor",
      precio: "$395",
      imagen: "/images/aretes-flor.png",
    },
    {
      nombre: "Set 3 pulseras rígidas",
      precio: "$210",
      imagen: "/images/pulseras.png",
    },
    {
      nombre: "Lentes de sol cafés",
      precio: "$95",
      imagen: "/images/lentes.png",
    },
  ];

  return (
    <div className="pagina">
      <header className="encabezado">
        <input
          type="search"
          className="buscador"
          placeholder="⌕"
        />

        <div className="logo">
          <span>HEIRLOOM STUDIO</span>
          <h1>ACCESORIOS</h1>
        </div>

        <div className="iconos">
          <span>◎</span>
          <span>♧</span>
          <span>⌂</span>
        </div>
      </header>

      <main className="productos">
        {productos.map((producto, index) => (
          <article className="producto" key={index}>
            <p className="propietario">
              Propietario: Juan Perez
            </p>

            <img
              src={producto.imagen}
              alt={producto.nombre}
            />

            <p className="nombre">
              {producto.nombre}
            </p>

            <p className="precio">
              {producto.precio}
            </p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
