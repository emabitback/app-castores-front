
import { Container, Row, Col} from 'react-bootstrap';
import ProductList from './ProductList';
import Inventario from './Inventario';
import SessionControl from './SessionControl';

function AdminView() {

  return (
          <Container>
            <SessionControl/>
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

export default AdminView;
