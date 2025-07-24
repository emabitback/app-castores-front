import { useState, useEffect } from 'react';
import { DataGrid }  from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import getUrl from '../global';
import SessionControl from './SessionControl';


function Inventario () {
    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.post(getUrl() + 'inventary/list').then((response) => {
            //console.log("Inventario", response)
          setPost(response.data);
        });

    }, []);

    const goTo = () => {
        navigate("/addinventary");
    }



    const columns = [
        { field: 'name', headerName: 'Nombre Producto', width: 150,
            renderCell: function(data) {
                return (data.row.product.name);
            } 
        },
        { field: 'quantity', headerName: 'Cantidad', width: 80 },
        { headerName: 'Status', width: 100 ,
            renderCell: function(data) {
                if (data.row.status === 1) {
                    return (<Badge bg="success">Entrada</Badge>);
                } else {
                    return (<Badge bg="danger">Salida</Badge>);
                }
            }  
        },
        { field: 'user.name', headerName: 'Autorizado por', width: 150 ,
            renderCell: function(data) { return (data.row.user.name) }  
        },
        { field: 'user.rol', headerName: 'Rol', width: 150 ,
            renderCell: function(data) {
                //console.log("data->", data)
                const rol = data.row.user.rol
                if (rol === 1) {
                    return 'Administrador'
                } else {
                    return 'Almacenista'
                }
            }  
        },
        { field: 'date', headerName: 'Fecha', width: 150 },
    ];

    return (
    <div>
        {
            (localStorage.getItem('idUser') == 2) ?  <SessionControl/> : <></>
        }
        <h1>Inventario</h1>
        <Button onClick={goTo}>
        Agregar al Inventario
        </Button>

        <DataGrid
        rows={post}
        columns={columns}/>
    </div>
    );
}

export default Inventario;