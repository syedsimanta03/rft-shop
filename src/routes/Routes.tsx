import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import Products from './../pages/Products'
import Index from './../pages/Index'
import PageNotFound from './../pages/PageNotFound'

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path='/products/:id'>
        <ProductDetail />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      <Route path='/'>
        <Index />
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  )
}

export default Routes
