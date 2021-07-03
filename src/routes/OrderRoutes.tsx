import React from 'react'
import { Route, Switch } from 'react-router-dom'
import OrderDetail from './../pages/OrderDetail';
import Orders from './../pages/Orders';
import PageNotFound from './../pages/PageNotFound';


interface Props {}

const OrderRoutes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path='/orders/my-orders/:id'>
        <OrderDetail />
      </Route>
      <Route path='/orders/my-orders'>
        <Orders />
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  )
}

export default OrderRoutes
