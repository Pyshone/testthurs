import React from 'react'
import Banner from '../../../../components/sections/home/banner'
import Crafted from '../../../../components/sections/home/crafted'
import Choose from '../../../../components/sections/home/choose'
import Interior from '../../../../components/sections/home/interior'
import ProfileCard from '../../../../components/sections/profile/profileCard'
import Shopcart from '../../../../components/sections/shop/shopcart'
import ContactTable from '../../../../components/sections/contact/contactTable'
import Cartlist from '../../../../components/sections/shop/cartlist'

const Home = () => {
  return (
    <div>
     <Banner title="Modern Interior" tit="Design Studio"/>
     <Crafted/>
     <Choose/>
     <Interior/>
    </div>
  )
}

export default Home
