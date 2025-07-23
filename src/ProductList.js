
import Button from  'react-bootstrap/Button';
import Badge from  'react-bootstrap/Badge';
import { DataGrid }  from '@mui/x-data-grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import getUrl from './global';
import { useNavigate } from "react-router-dom";

function ProductList () {
    const [post, setPost] = useState([]);
     const navigate = useNavigate();

    useEffect(() => {
        getProducts()
        console.log(getUrl())
    }, []);

    const getProducts = () => {
        axios.post(getUrl() + "product/list").then((response) => {
            //console.log(response)
            setPost(response.data);
        });
    }

    const changeHandled = (idProduct, status) => {
        console.log("Click me")
        axios.get(getUrl() + 'product/'+ idProduct + '/' + status)
        .then(response => {
            //console.log(response.data);
            getProducts()
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            getProducts()
        });
    }

    const goTo = () => { navigate("/addproduct") }
    
    
    const columns = [
          { field: 'name', headerName: 'Nombre Producto', width: 180,
              renderCell: function(data) {
                  return (data.row.name);
              } 
          },
            { headerName: 'Status', width: 120 ,
            renderCell: function(data) {
                if (data.row.status === 1) {
                    return (<Badge bg="success">Activo</Badge>);
                } else {
                    return (<Badge bg="danger">Inactvo</Badge>);
                }
            }  
        },
        { field: 'status', headerName: 'Activar/desactivar', width: 150 ,
            renderCell: function(data) {
                return (<Button className='btn btn-light' onClick={() => changeHandled(data.row.id, data.row.status)}> <i className="bi bi-arrow-repeat" style={{ fontSize: '26px', color: 'red' }}></i></Button>)
            } 
        },
      ];

    return (
        <div className='mt-4'> 
            <h1>Lista de Productos</h1>
            <Button onClick = { goTo }> Agregar producto</Button>
            <DataGrid
                rows= {post }
                columns={ columns }
            />
        </div>
    );
}

export default ProductList;
