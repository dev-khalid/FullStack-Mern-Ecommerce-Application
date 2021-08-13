import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  //whenever this component renders useEffect hook will execute
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products'); //we didn't defined here anything like http://localhost:5000/api/products
      //that's why we will get a cors error . That's why we need to add a proxy .
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
