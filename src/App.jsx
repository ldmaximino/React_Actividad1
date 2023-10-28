import './App.css'
import { ItemCount } from './components/ItemCount'

function App() {
  const productos = [
    {
      id: 15,
      descripcion: "Mouse 2ghz Genius",
      precio: 5550,
      stock:2,
    },
    {
      id: 24,
      descripcion: "Teclado Genius",
      precio: 6320,
      stock:10,
    },
    {
      id: 32,
      descripcion: "Pantalla Samsung",
      precio: 17820,
      stock:5,
    },
    {
      id: 4,
      descripcion: "Memoria USB 20gb",
      precio: 3720,
      stock: 41,
    },
  ]

  return (
    <>
      {
        productos.length > 0 &&
        productos.map((producto) => {
          return (
            <>
              <article>
                <h3>{producto.descripcion}</h3>
                <p>Precio: ${producto.precio}</p>
                <p><strong>Stock: {producto.stock}</strong></p>
              </article>
              <div>
                <ItemCount key={producto.id} initial={1} stock={producto.stock} />
              </div>
              <button className="btnComprar">Comprar</button>
              <hr />
            </>
          )
        })
      }
    </>
  )
}

export default App
