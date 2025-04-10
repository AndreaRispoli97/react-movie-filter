import { useState } from 'react'
import films from './data/ListFilm'


function App() {

  const [film, setFilm] = useState(films)
  console.log(films);
  return (
    <>
      <h1>Catalogo film</h1>
      <section>
        <h2>Cerca Articoli</h2>

        <article>
          <h2>Lista Articoli</h2>
          <ul>
            {films.map((film, index) => (
              <li key={index}>
                <div>{film.genre}</div>
                <div>{film.title}</div>
                <hr />
              </li>))}
          </ul>
        </article>
      </section>

    </>
  )
}

export default App
