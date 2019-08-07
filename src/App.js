import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import components
import Products from './component/Products';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Product from './component/Product';
import Header from './component/Header/Header';
//axios
import axios from 'axios';

function App() {
  
  //state of products 
  const [ products, getProducts ] = useState([]);
  const [ updateProducts, getUpdateProducts ] = useState(true);

  useEffect(() => {

      //actualizar
      if(updateProducts) { 
        const consultApi = async () => {
        //consultar la api de json-server
        const result = await axios.get('http://localhost:4000/restaurant');

        //lo guardamos en la lista
        getProducts(result.data); 
      }
      consultApi();
      //cambiar a false la actualizacion de producto
      getUpdateProducts(false);
    }    
  }, [updateProducts]);


  return (
    <div className="App">
         <Router>
            <Header/>
            <main className="container mt-5">
              <Switch>
                  <Route exact path="/products" 
                         render={() => (
                            <Products
                              products={products} 
                            />
                         )}
                   />
                  <Route exact path="/new-product" 
                         render={() => (
                            <AddProduct 
                             getUpdateProducts={getUpdateProducts}
                            />
                         )}/>
                  <Route exact path="/products/:id" component={Product} />
                  <Route exact path="/products/edit/:id" component={EditProduct} />
              </Switch>
            </main>
            <p className="mt-4 p2 text-center">Todos los Derechos Reservados</p>
         </Router>
    </div>
  );
}

export default App;
