import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';//works with history api 
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
const App = () => { 
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route exact path='/' component={HomeScreen}/>
            <Route path='/product/:id' component={ProductScreen} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
};

export default App;
