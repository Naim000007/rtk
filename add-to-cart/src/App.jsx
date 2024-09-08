import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  const [products, setProduct] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(data => data.json())
      .then(result => setProduct(result))
  }, [])

  const cards = products.map(product => (
    <div className='col-md-3' style={{ margin: '10px' }}>
      <Card style={{ width: '18rem' }} key={product.id} className='h-100 '>
        <Card.Img variant="top" src={product.image} style={{ height: '200px', width: '200px' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price} taka
          </Card.Text>

        </Card.Body>
        <Button variant="primary">Add to cart</Button>
      </Card>
    </div>))

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className='row'>
        {
          cards
        }

      </div>
    </>
  )
}

export default App
