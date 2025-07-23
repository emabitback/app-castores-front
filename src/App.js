import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Producto from './Producto';
import ProductList from './ProductList';
import Inventario from './Inventario';
import InventarioAdd from './InventarioAdd';

function App() {
  return (
          <Container>
            <Row>
              <Col lg={5}> 
                <ProductList/>
              </Col>
              
              <Col lg={7}>
                <Inventario/>
              </Col>
            </Row>
         </Container>
  )
  
}

export default App;
