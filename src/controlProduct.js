import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import getUrl from './global';
 

 function ControlProduct() {
      const [options, setOptions] = useState([]);
      const [selectedValue, setSelectedValue] = useState('');


    useEffect(() => {
        axios.post(getUrl() + 'product/list').then((response) => {
            console.log(response)
          setOptions(response.data);
        });
    }, []);

      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

      return (
        <Form.Select value={selectedValue} onChange={handleChange} id='productSelect'>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </Form.Select>
      );
    }

    export default ControlProduct;