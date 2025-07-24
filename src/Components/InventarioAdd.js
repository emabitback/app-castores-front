

import { Container, Row , Col, Card, Form, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';

import ControlProduct from './controlProduct';
import SessionControl from './SessionControl';
import getUrl from '../global';
import { Navigate } from 'react-router-dom';



function InventarioAdd () {

    const resetControls = () => { document.getElementById("formProduct").reset() }

    const add = (event) => {
        const productControl = document.getElementById("productSelect");
        const quantityControl = document.getElementById("quantity");
        const movementControl = document.getElementById("movement");

        const idProduct = productControl.value;
        const movementType = movementControl.value;
        const stock = quantityControl.value;
        
        //console.log("Selected Value P:", idProduct);
        //console.log("Selected Value quantity:", quantity.value);
        //console.log("Selected Value: M", movementType);

        if ((idProduct !== '' && stock !== '' && movementType !=='') || (idProduct > 0 && stock > 0 && movementType > 0) ) {
            const options = {headers: {'Content-Type': 'application/json'}}
            const dateCreated = new Date().toISOString().slice(0, 10);
            console.log(dateCreated)

            const idUser = localStorage.getItem('idUser');
            const jsonTemplate = 
            {"product":{"id":idProduct},"user":{"id":idUser},"quantity":stock,"status":movementType,"date": dateCreated}

            axios
            .post(getUrl() + 'inventary/add', jsonTemplate, options)
            .then(response => {
                console.log(response.data);
                resetControls()
                withReactContent(Swal).fire({
                icon: "success",
                    text: "Agregado a Inventario",
                    showConfirmButton: true,
                })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                withReactContent(Swal).fire({
                icon: "error",
                text: "Algo paso",
                showConfirmButton: true,
                })
            });

        } else {
            withReactContent(Swal).fire({
            icon: "error",
            text: "Ningun campo debe de ir vacio",
            showConfirmButton: true,
            })
        }
    }

    return (
        <>
        {
            (localStorage.getItem('idUser') == 1 )

            ? <Container>
                    <SessionControl/>
                    <Row>
                        <Card className="text-center">
                            <Card.Header>Agregar al Inventario</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col lg={4}>
                                        </Col>
                                        <Col lg={4}>
                                            <Form className='card' id='formProduct'>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Nombre del producto</Form.Label>
                                                    <ControlProduct/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Cantidad</Form.Label>
                                                    <Form.Control type="number"  min="1" max="100" placeholder="cantidad de piezas" id="quantity"/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Tipo</Form.Label>
                                                        <Form.Select aria-label="Default select example" id="movement">
                                                            <option>Selecciona el movimiento</option>
                                                            <option value="1">Entrada</option>
                                                            <option value="2">Salida</option>
                                                        </Form.Select>
                                                    <Button className='mt-2' onClick={add}> Guardar</Button>
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

        : <Navigate to='/inventario' replace></Navigate>

        }
        </>
    );
}

export default InventarioAdd;