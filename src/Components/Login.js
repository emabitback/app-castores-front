
import {Row , Card, Form, Button} from 'react-bootstrap';



function Login() {

    const setLogin = () => {
        const user = document.getElementById('email');
        const pwd = document.getElementById('password');

        const userForce = "admin"
        if (user.value === userForce) {
            localStorage.setItem('idUser', 1);
            window.location= '/admin' 
        } else {
            localStorage.setItem('idUser', 2);
            window.location= '/inventario' 
        }
    }


    return (
        <Card className="text-center">
            <Card.Header style={{backgroundColor: 'black', color: 'white'}}>Inicia Sesion</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Form className='' id='formProduct'>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Usuario:</Form.Label>
                                <Form.Control type="text" placeholder="user" id="email" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control type="password" placeholder="clave de acceso" id="password"/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Button className='btn btn-success' onClick={ () => setLogin()}> Log in </Button>
                        </Row>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>
  )
  
}

export default Login;
