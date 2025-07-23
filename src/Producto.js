import Form from 'react-bootstrap/Form';
import Button from  'react-bootstrap/Button';
import ProductList from './ProductList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import getUrl from './global';


function Producto () {

    const [showAlert, setShowAlert] = useState(false);

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
                    <Nav.Link href="/">Inicio</Nav.Link>
                </Card.Footer>
            </Card>
        </Row>
    </Container>
    );
}

export default Producto;

