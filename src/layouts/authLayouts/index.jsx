import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayouts = () => {
  return (
    <Fragment>
    <div >
      <Outlet/>
    </div>
    </Fragment>
  )
}

export default AuthLayouts
