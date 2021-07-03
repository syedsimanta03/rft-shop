import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound';
import ManageProducts from '../pages/ManageProducts';
import ManageOrderDetail from '../pages/ManageOrderDetail';
import ManageOrders from '../pages/ManageOrders';
import ManageUsers from '../pages/ManageUsers';

interface Props {}

const AdminRoutes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path='/admin/manage-products'>
        <ManageProducts />
      </Route>
      <Route path='/admin/manage-orders/:id'>
        <ManageOrderDetail />
      </Route>
      <Route path='/admin/manage-orders'>
        <ManageOrders />
      </Route>
      <Route path='/admin/manage-users'>
        <ManageUsers />
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  )
}

export default AdminRoutes
