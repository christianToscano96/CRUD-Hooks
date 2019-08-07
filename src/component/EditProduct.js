import React, {useState, useRef} from 'react';
import Error from '../component/error/Error';

function EditProduct({product}) {


    //generar los refs
    const priceSaucerRef = useRef('');
    const nameSaucerRef = useRef('');
     //validacion
     const [ error, getError ] = useState(false);
     const [ category, getCategory ] = useState('');


    const editProduct = e => {
        e.preventDefault();
        //revisar si cambio la categoria de lo contrario asignar el mismo valor
        let categorySaucer = (category === '') ? product.category : category;

        console.log(categorySaucer);

        //obtener los valores del formulario
        const editSaucer = {
            nameSaucer : nameSaucerRef.current.value ,
            priceSaucer : priceSaucerRef.current.value,
            category :  categorySaucer          
        }
        //enviar el Request
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

export default EditProduct;