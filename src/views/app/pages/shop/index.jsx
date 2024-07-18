import React, { Fragment } from 'react'
import PageTitle from '../../../../components/widgets/pageTitle'
import Banner from '../../../../components/sections/home/banner'
import ShopList from '../../../../components/sections/shop/shopList'

const Shop = () => {
  return (
   <Fragment>
   <Banner title="Shop"/>
   <ShopList/>
      </Fragment>
  )
}

export default Shop
