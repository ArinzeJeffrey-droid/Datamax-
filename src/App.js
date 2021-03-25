import TableContainer from './components/table-container/TableContainer';
import axios from "axios"
import { useEffect, useState } from 'react';
import Paginate from './components/Paginate';



function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(`https://www.anapioficeandfire.com/api/books?page=${page}`).then(res => {
      setBooks(res.data)
      setLoading(false)
    }).catch(err => setError(true))
  },[page])
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const paginate = (value) => {
    if(value) setPage(value)
    if(page === 1) setPage(2)
    if(page === 2) setPage(1)
  }
  const filteredBooks = books.filter(book => book.name.toLowerCase().includes(search.toLowerCase()))
  return error ? (<h1 className="text-center mt-5">Something went wrong, check your internet and refresh your browser</h1>) : (
    <div className="container mt-5">
      <div className="d-flex mb-1 flex-row-reverse bd-highlight move-right">
        <div style={{paddingRight: "0"}} className="input-group col-md-3">
          <input placeholder="Search books" value={search} onChange={handleChange} type="text" className="form-control bor1" aria-label="Text input with dropdown button"/>
        </div>
      </div>
      <TableContainer loading={loading} books={filteredBooks}/>
      <Paginate page={page} paginate={paginate}/>
    </div>
  );
}

export default App;
