import React from 'react';
import {Link} from 'react-router-dom';


function ProductsList({product}) {

    //delete product
    const deleteProduct = id => {
        console.log('eliminando', id)
        //delete the  registry
        
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