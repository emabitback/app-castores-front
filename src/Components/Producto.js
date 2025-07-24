
import axios from 'axios';
import { Nav, Container, Row , Col, Card, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import getUrl from '../global';
import SessionControl from './SessionControl';


function Producto () {

  const showSwal = () => {
    withReactContent(Swal).fire({
    icon: "success",
      text: "Producto registrado",
      showConfirmButton: true,
    })
  }

    const showSwalError = () => {
    withReactContent(Swal).fire({
    icon: "error",
      text: "Algo paso",
      showConfirmButton: true,
    })
  }

    const add = (event) => {
        const input = document.getElementById('producto');
        console.log(input.value)

        if (input.value !== '') {
            axios
            .post(getUrl() + 'product/add', { name: input.value,status: 1} )
            .then(response => {
                console.log(response.data); 
                showSwal()
                input.value = ''
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                showSwalError()
            });

        } else {
            withReactContent(Swal).fire({
                icon: "error",
                text: "Ingresa un nombre de producto por favor",
                showConfirmButton: true,
            })
        }
    }


    return (
    <Container> 
        <SessionControl/>
        <Row>
            <Card className="text-center">
                <Card.Header>Agregar Producto</Card.Header>
                <Card.Body>
                <Card.Text>
                    <Row>
                        <Col lg={4}>
                        </Col>
                        <Col lg={4}>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre del producto</Form.Label>
                                <Form.Control type="text" placeholder="nombre de producto" id="producto"/>
                                <Button className='mt-2' onClick={add}> Agregar</Button >
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Nav.Link href="/admin">Inicio</Nav.Link>
                </Card.Footer>
            </Card>
        </Row>
    </Container>
    );
}

export default Producto;

