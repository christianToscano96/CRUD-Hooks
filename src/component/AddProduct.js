import React, { useState } from 'react';
import Error from '../component/error/Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';


function AddProduct({history}) {

    //state 
    const [ nameSaucer, getNameSaucer ] = useState('');
    const [ priceSaucer, getPriceSaucer ] = useState('');
    const [ category, getCategory ] = useState('');
    //validacion
    const [error, getError ] = useState(false);

    //para leer los radios
    const readRadioValue = e => {
        getCategory(e.target.value);
    }

    //envio de datos del formulario
    const addProduct = async e => {
        e.preventDefault();

        if(nameSaucer === '' || priceSaucer === '' || category === '') {
            getError(true);
            return;
        }
        getError(false);

        //create the new product
        try {
            const result = await axios.post('http://localhost:4000/restaurant', {
                nameSaucer,
                priceSaucer,
                category
            });
            
            //al tenener un status 201 de enviado podemos mostrael el msj
            if(result.status === 201) {
                Swal.fire(
                    'Producto Creado',
                    'El producto se creo correctamente',
                    'success'
                  )
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Hubo un Error, vuelve a intentarlo',
              })
        }

        //redirigir al usuario a productos
        history.push('/products');
    }
    return(
        <div className="col-md-8 mx-auto">
            <h1 className="text-center">Agregar Nuevo Producto</h1>
            <hr></hr>

            {(error) ? <Error message="Todos los campos son obligatorios"/> : null}

            <form 
                className="mt-5 p-2 shadow rounded"
                onSubmit={addProduct}
            >
                <div className="form-group p-2 pt-2 ">
                    <label>Nombre del Platillo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nombre Platillo"
                        onChange={e => getNameSaucer(e.target.value)}
                    />
                </div>
                <div className="form-group  pt-2">
                    <label>Precio del Platillo</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Precio del Platillo"
                        onChange={e => getPriceSaucer(e.target.value)}
                    />
                </div>

                <legend className="text-center p-2 pt-2">Categoría</legend>
                <div className="text-center py-2 shadow  pt-2 rounded">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="postre"
                            onChange={readRadioValue}
                        />
                        <label className="form-check-label">
                            Postre
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="bebida"
                            onChange={readRadioValue}
                        />
                        <label className="form-check-label">
                            Bebida
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="cortes"
                            onChange={readRadioValue}
                        />
                        <label className="form-check-label">
                            Cortes
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="ensalada"
                            onChange={readRadioValue}
                        />
                        <label className="form-check-label">
                            Ensalada
                        </label>
                    </div>
                </div>

                <input type="submit" className="mb-3 col-md-2 font-weight-bold text-uppercase mt-5 btn btn-success btn-block py-3" value="Agregar Producto" />
            </form>
        </div> 
    )
}

export default withRouter(AddProduct);