import React from 'react';

function AddProduct() {
    return(
        <div classsName="col-md-8 mx-auto">
            <h1 className="text-center">Agregar Nuevo Producto</h1>
            <hr></hr>

            <form 
                className="mt-5 p-2 shadow rounded"
            >
                <div className="form-group p-2 pt-2 ">
                    <label>Nombre del Platillo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nombre Platillo"
                    />
                </div>
                <div className="form-group  pt-2">
                    <label>Nombre del Platillo</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="Precio del Platillo"
                    />
                </div>

                <legen className="text-center p-2 pt-2">Categoría</legen>
                <div className="text-center py-2 shadow  pt-2 rounded">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="postre"
                        />
                        <lebel className="form-check-label">
                            Postre
                        </lebel>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="bebida"
                        />
                        <lebel className="form-check-label">
                            Bebida
                        </lebel>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="cortes"
                        />
                        <lebel className="form-check-label">
                            Cortes
                        </lebel>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            value="ensalada"
                        />
                        <lebel className="form-check-label">
                            Ensalada
                        </lebel>
                    </div>
                </div>

                <input type="submit" className="mb-3 col-md-2 font-weight-bold text-uppercase mt-5 btn btn-success btn-block py-3" value="Agregar Producto" />
            </form>
        </div> 
    )
}

export default AddProduct;