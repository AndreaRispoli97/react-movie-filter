import { useEffect, useState } from 'react'
import films from './data/ListFilm'


function App() {

  const [film, setFilm] = useState(films)
  const [searchGenre, setSearchGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [newFilm, setNewFilm] = useState('');
  const [newGenre, setNewGenre] = useState('');

  const addFilm = event => {
    event.preventDefault();

    if (newFilm !== '') {
      let newFilms =
      {
        title: newFilm,
        genre: newGenre
      }
      let newFilmList = [...film, newFilms];
      setFilm(newFilmList);
      console.log(newFilmList);
      setNewFilm('');
      setNewGenre('');
    }


  }

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
      <section>
        <form onSubmit={addFilm}>
          <input type="text"
            onChange={event => setNewFilm(event.target.value)}
            value={newFilm}
          />
          <select
            onChange={event => setNewGenre(event.target.value)}
            value={newGenre}>
            <option value=''>---</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
          <button type='submit'>Aggiungi Film</button>
        </form>
      </section>

    </>
  )
}

export default App
