<<<<<<< HEAD
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 20;

function App() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setErrorMsg('');
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${
            searchInput.current.value
          }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg('Error fetching images. Try again later.');
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };

  return (
    <div className='container'>
      <h1 className='title'>Image Search</h1>
      {errorMsg && <p className='error-msg'>{errorMsg}</p>}
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Type something to search...'
            className='search-input'
            ref={searchInput}
          />
        </Form>
      </div>
      <div className='filters'>
        <div onClick={() => handleSelection('nature')}>Nature</div>
        <div onClick={() => handleSelection('birds')}>Birds</div>
        <div onClick={() => handleSelection('cats')}>Cats</div>
        <div onClick={() => handleSelection('shoes')}>Shoes</div>
      </div>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <>
          <div className='images'>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                className='image'
              />
            ))}
          </div>
          <div className='buttons'>
            {page > 1 && (
              <Button onClick={() => setPage(page - 1)}>Previous</Button>
            )}
            {page < totalPages && (
              <Button onClick={() => setPage(page + 1)}>Next</Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
=======
import { Form } from 'react-bootstrap'
import { useCallback, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import './index.css'
import axios  from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';

function App() {
 const searchInput = useRef(null);
 const ImgPerPage = 14;

 const [images, setImages] = useState([]);
 const [loading, setLoading] = useState(false);
 const [page, setPage] = useState(1);
 const [totalPages, setTotalPages] = useState(0);
 const [errorMessage, setError] = useState('');

 const fetchPixls = useCallback( async () => {
  try {
    if (searchInput.current.value) {
      setError('');
      setLoading(true);
      const { data } = await axios.get(
        `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${ImgPerPage}&client_id=${import.meta.env.VITE_API_KEY}`
      );
      setImages(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    }
  } catch (error) {
    setError('Something went wrong while fetching the images, try again later.');
    console.log(error);
    setLoading(false);
  }
 }, [page]);

 useEffect(() => {
  fetchPixls();
 }, [fetchPixls, page]);
 
 const searchPixls = () => {
  setPage(1);
  fetchPixls();
 }

 const handleSearch = (event) => {
  event.preventDefault();
  searchPixls();
 };

 const handleSelection = (selection) => {
  searchInput.current.value = selection;
  searchPixls();
 };

 return (
  <div className='container'>
    <h1 className="title">PixlHunt</h1>
    {errorMessage && <p className='error-msg'>{errorMessage}</p>}
    <div className="search-section">
      <Form onSubmit={handleSearch}>
        <Form.Control 
        type="search" 
        placeholder="Search Image" 
        className='search-input'
        ref={searchInput}
        />
      </Form>
    </div>
    <div className="filters">
      <div onClick={() => handleSelection('Nature')}>Nature</div>
      <div onClick={() => handleSelection('Architecture')}>Architecture</div>
      <div onClick={() => handleSelection('Automobile')}>Automobile</div>
    </div>
    {loading ? (
      <p className="loading">Loading...</p>
    ) : (
      <>
        <div className="images">
        {
          images.map(image => {
            return (
              <img 
                key={image.id} 
                src={image.urls.small} 
                alt={image.alt_description} 
                className='image'
              />
            );
          })
        }
        </div>
        <div className="buttons">
          { page > 1 && <Button onClick={() => setPage(page - 1)}>Previous</Button> }
          { page < totalPages && <Button onClick={() => setPage(page + 1)}>Next</Button> }
        </div>
      </>
    )}
  </div>
  );
}

// ** Add paginations

export default App
>>>>>>> 8c5eb78 (first commit)
