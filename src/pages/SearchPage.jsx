import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api';
import ProductCard from '../components/ProductCard';

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  useEffect(() => {
    if (query) {
      api.get(`search?query=${query}`)
        .then(res => {
          console.log(res.data);  
          setProducts(res.data);
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }, [query]);

  return (
    <div className='mt-20 text-center'>
            <h4 className='m-5 text-lg font-bold text-gray-600'>Search Results</h4>
            <div className='mt-10 flex justify-center items-center flex-wrap gap-10'>
            {products.map(product => <ProductCard  key={product.id} product={product} /> )}
            </div>
        </div>
  )
}

export default SearchPage

