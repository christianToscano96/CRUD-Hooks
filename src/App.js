import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import components
import Products from './component/Products';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';


function App() {
  
  return (
    <div className="App">
         <Router>
            <Switch>

            </Switch>
         </Router>
    </div>
  );
}

export default App;
