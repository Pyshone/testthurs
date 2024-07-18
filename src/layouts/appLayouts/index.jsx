import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from '../authLayouts/appFooter'
import AppHeader from '../authLayouts/appHeader'

const AppLayouts = () => {
    return (
        <Fragment>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </Fragment>
    )
}

export default AppLayouts
