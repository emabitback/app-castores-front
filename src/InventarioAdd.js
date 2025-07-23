import Form from 'react-bootstrap/Form';
import Button from  'react-bootstrap/Button';
import ProductList from './ProductList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ControlProduct from './controlProduct';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const url="http://192.168.0.4:8080/inventary/add";

function InventarioAdd () {

    //const resetControls = (productControl, quantityControl, movementControl) => {
    const resetControls = () => {
        document.getElementById("formProduct").reset();

    }

    
    const showSwal = () => {
        withReactContent(Swal).fire({
        icon: "success",
        text: "Producto registrado",
        showConfirmButton: true,
        })
    }

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

            const jsonTemplate = 
            {"product":{"id":idProduct},"user":{"id":1},"quantity":stock,"status":movementType,"date": dateCreated}

            axios
            .post(url, jsonTemplate, options)
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
        <Container> 
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
                        <Nav.Link href="/">Inicio</Nav.Link>
                    </Card.Footer>
                </Card>
            </Row>
        </Container>
    );
}

export default InventarioAdd;