import { useEffect, useState } from 'react'
import films from './data/ListFilm'


function App() {

  const [film, setFilm] = useState(films)
  const [searchGenre, setSearchGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    let newListFilm = films
    if (searchGenre !== '') {

      newListFilm = newListFilm.filter(films => films.genre === searchGenre);
    }

    if (searchTitle) {
      newListFilm = newListFilm.filter(films => films.title.toLowerCase().includes(searchTitle.toLowerCase()));
    }
    setFilm(newListFilm)


  }, [searchGenre, searchTitle])

  return (
    <>
      <h1>Catalogo film</h1>
      <section>
        <h2>Cerca Film</h2>
        <input type="text" value={searchTitle} onChange={e => setSearchTitle(e.target.value)} />

        <select value={searchGenre} onChange={e => setSearchGenre(e.target.value)}>
          <option value="">Scegli il genere</option>
          <option>Fantascienza</option>
          <option>Thriller</option>
          <option>Romantico</option>
          <option>Azione</option>
        </select>
        <h2>{searchGenre}</h2>

        <article>
          <h2>Lista Film</h2>
          <ul>
            {film.map((film, index) => (
              <li key={index}>
                <div>Genere: {film.genre}</div>
                <div>Titolo: {film.title}</div>
                <hr />
              </li>))}
          </ul>
        </article>
      </section>

    </>
  )
}

export default App
