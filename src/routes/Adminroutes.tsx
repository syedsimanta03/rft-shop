import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from './../pages/PageNotFound';
import ManageProducts from './../pages/ManageProducts';
import ManageOrderDetail from './../pages/ManageOrderDetail';

interface Props {}

const OrderRoutes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path='/admin/manage-products'>
        <ManageProducts />
      </Route>
      <Route path='/products'>
        <ManageOrderDetail />
      </Route>
      <Route path='/products'>
        <ManageOrderDetail />
      </Route>
      <Route path='/products'>
        <ManageOrderDetail />
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  )
}

export default OrderRoutes
