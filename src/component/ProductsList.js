import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


function ProductsList({product, getUpdateProducts}) {

    //delete product
    const deleteProduct =  id => {
        console.log('eliminando', id)
        //delete the  registry

        //alerta
        Swal.fire({
            title: '¿Estas seguro?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6ab04c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then(async (result) => {
              //eliminar
            if (result.value) {
            
             try {
                 //cuando confirma ejecutar el eliminar
                const url = `http://localhost:4000/restaurant/${id}`;
                
                const result = await axios.delete(url);

                if(result.status = 200) {
                    Swal.fire(
                        'Eliminado!',
                        'Este Platillo a sido eliminado.',
                        'success'
                    )
                    //consultar la api
                     getUpdateProducts(true); 
                }                             
             } catch (error) {
                 console.log(error);
                 Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Hubo un Error, vuelve a intentarlo',
                  })
             }              
            }
            
          });
        
    }
    return(
            <li data-category={product.category} className="list-group-item d-flex justify-content-between aling-items-center">
                <p>
                    {product.nameSaucer} {' '}
                    <span className="font-weight-bold">${product.priceSaucer}</span>
                </p>
                <div>
                    <Link
                        to={`/products/edit/${product.id}`}
                        className="btn btn-success rounded mr-2"
                    >
                    Editar
                    </Link>

                    <button
                        type="button"
                        className="btn btn-danger rounded"
                        onClick={() => deleteProduct(product.id)}
                    >
                        Eliminar 
                    </button>
                 </div>
            </li>  
    )
}

export default ProductsList;