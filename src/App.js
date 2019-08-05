import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import components
import Products from './component/Products';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Product from './component/Product';


function App() {
  
  return (
    <div className="App">
         <Router>
            <Switch>
                <Route exact path="/new-product/new" component={AddProduct} />
                <Route exact path="/new-product" component={AddProduct} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/products/edit/:id" component={EditProduct} />
            </Switch>
         </Router>
    </div>
  );
}

export default App;
