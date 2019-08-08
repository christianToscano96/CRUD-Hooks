import React, {useState, useRef} from 'react';
import Error from '../component/error/Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

function EditProduct(props) {

    //destructuring de props
    const {history, product, getUpdateProducts} = props;

    //generar los refs
    const priceSaucerRef = useRef('');
    const nameSaucerRef = useRef('');
     //validacion
     const [ error, getError ] = useState(false);
     const [ category, getCategory ] = useState('');


    const editProduct = async e => {
        e.preventDefault();
        //validacion
        const newNameSaucer = nameSaucerRef.current.value,
              newPriceSaucer = priceSaucerRef.current.value;

        if(newNameSaucer === '' || newPriceSaucer === '' || category === '' ){
            getError(true);
            return;
        }
         getError(false);
        //revisar si cambio la categoria de lo contrario asignar el mismo valor
        let categorySaucer = (category === '') ? product.category : category;

        console.log(categorySaucer);

        //obtener los valores del formulario
        const editSaucer = {
            nameSaucer : newNameSaucer,
            priceSaucer : newPriceSaucer,
            category :  categorySaucer          
        }
        //enviar el Request
        const url=`http://localhost:4000/restaurant/${product.id}`;

        try {
            //metodo put para acualizar
            const result = await axios.put(url, editSaucer);
            //al tenener un status 200 de editado podemos mostrael el msj
            if(result.status === 200) {
                Swal.fire(
                    'Producto Editado',
                    'El producto se editó correctamente',
                    'success'
                )
            }
        } catch (error) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Hubo un Error, vuelve a intentarlo',
              })
        }

        //redirigir al usuario
        getUpdateProducts(true);
        history.push('/products');
    }

    //para leer los radios
    const readRadioValue = e => {
        getCategory(e.target.value);
    }
    
    return(
        <div className="col-md-8 mx-auto">
        <h1 className="text-center">Editar Producto</h1>
        <hr></hr>

        {(error) ? <Error message="Todos los campos son obligatorios"/> : null}

        <form 
            className="mt-5 px-5 py-2 shadow rounded"
            onSubmit={editProduct}
        >
            <div className="form-group pt-2 ">
                <label>Nombre del Platillo</label>
                <input
                    type="text"
                    className="form-control rounded"
                    name="name"
                    placeholder="Nombre Platillo" 
                    ref={nameSaucerRef} 
                    defaultValue={product.nameSaucer}          
                />
            </div>
            <div className="form-group pt-2">
                <label>Precio del Platillo</label>
                <input
                    type="number"
                    className="form-control rounded"
                    name="price"
                    placeholder="Precio del Platillo"
                    ref={priceSaucerRef}
                    defaultValue={product.priceSaucer} 
                />
            </div>

            <legend className="text-center p-2 pt-1">Categoría</legend>
            <div className="text-center py-3  pt-2 shadow rounded">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value="postre"
                        onChange={readRadioValue}
                        defaultChecked={product.category === 'postre'}
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
                        defaultChecked={product.category === 'bebida'}
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
                        defaultChecked={product.category === 'cortes'}
                    />
                    <label className="form-check-label">
                        Cortes
                    </label>
                </div>
                <div className="form-check form-check-inline ">
                    <input
                        className="form-check-input "
                        type="radio"
                        name="category"
                        value="ensalada"
                        onChange={readRadioValue}
                        defaultChecked={product.category === 'ensalada'}
                    />
                    <label className="form-check-label">
                        Ensalada
                    </label>
                </div>
            </div>

            <input type="submit" className="mb-3 col-md-12 rounded font-weight-bold text-uppercase mt-5 btn btn-success btn-block py-3" value="Editar Producto" />
        </form>
    </div> 
    )
}

export default withRouter(EditProduct);