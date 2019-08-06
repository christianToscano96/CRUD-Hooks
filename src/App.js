import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import components
import Products from './component/Products';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Product from './component/Product';
import Header from './component/Header/Header';


function App() {
  
  return (
    <div className="App">
         <Router>
            <Header/>
            <main className="container mt-5">
              <Switch>
                  <Route exact path="/product/new" component={AddProduct} />
                  <Route exact path="/products" component={Products} />
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
