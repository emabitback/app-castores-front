import { Row , Col, Button} from 'react-bootstrap';


function SessionControl () {
    const logout = () => {
        localStorage.removeItem('idUser')
        window.location = '/'
    }

    return (
        <Row className='mt-2'>
            <Col lg={10}></Col>
            <Col lg={2}>
                <Button onClick={ ()=> { logout()}}>
                    Cerrar sesion
                </Button>
            </Col>
        </Row>
    );

}

export default SessionControl
