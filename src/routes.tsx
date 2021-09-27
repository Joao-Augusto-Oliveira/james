import { Route, BrowserRouter, Switch } from "react-router-dom";

import { Home } from './pages/Home';
import { AddProduct } from './pages/AddProduct';
import { EditProduct } from './pages/EditProduct';

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route component={ Home } path="/" exact />
      <Route component={ AddProduct } path="/criar-novo-produto" />
      <Route component={ EditProduct } path="/edit/:id" />

    </Switch>

    </BrowserRouter>
  )
}

export default Routes;

