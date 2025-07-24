
import { Row , Col } from 'react-bootstrap';
import Login from './Components/Login';

function App() {

  return (
    <Row style={ {backgroundColor: '#3D495A', height: '100vh'}}>
      <Col lg={4}></Col>
      <Col lg={5} className='position-absolute top-50 start-50 translate-middle'>
        <Login/>
      </Col>
    </Row>
  )
  
}

export default App;
