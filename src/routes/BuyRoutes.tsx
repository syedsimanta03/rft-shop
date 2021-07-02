import React from 'react'
import { Route, Switch } from 'react-router-dom';
import MyCart from './../pages/MyCart';
import PageNotFound from './../pages/PageNotFound';
import SelectAddress from './../pages/SelectAddress';
import Checkout from './../pages/Checkout';

interface Props {

}

const BuyRoutes: React.FC<Props> = () => {
    return <Switch>
      <Route path='/buy/my-cart'>
        <MyCart/>
      </Route>
      <Route path='/buy/select-address'>
        <SelectAddress/>
      </Route>
      <Route path='/buy/checkout'>
        <Checkout/>
      </Route>
      <Route path='*'>
        <PageNotFound/>
      </Route>
    </Switch>
}

export default BuyRoutes