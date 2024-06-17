
import './App.css';
import * as React from 'react';
import { useAvailableProducts } from './queries/products';

function App() {
  const { data: products, error, isLoading } = useAvailableProducts();
  return (
    <div className="App">
      <header className="header">
        <h1 className='h1'>Products</h1>
      </header>
      <div className="productsList">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading products: {error.message}</p>}
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <img src={product.imageUrl} alt={product.name} className='productImg' />
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>

  );
}

export default App;
