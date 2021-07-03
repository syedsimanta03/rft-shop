import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import Products from './../pages/Products'
import Index from './../pages/Index'
import PageNotFound from './../pages/PageNotFound'
import BuyRoutes from './BuyRoutes'
import OrderRoutes from './OrderRoutes'
import AdminRoutes from './AdminRoutes'

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path='/buy'>
        <BuyRoutes />
      </Route>
      <Route path='/orders'>
        <OrderRoutes />
      </Route>
      <Route path='/admin'>
        <AdminRoutes />
      </Route>
      <Route path='/products/:id'>
        <ProductDetail />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      <Route exact path='/'>
        <Index />
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  )
}

export default Routes
