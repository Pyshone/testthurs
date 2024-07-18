import React, { Fragment } from 'react'
// import 'E:/app/myproject/src/assets/css/pageTitle.css'

const PageTitle = ({title}) => {
  return (
    <Fragment>
    <div className='pagetitle'>
      <h1>{title}</h1>
    </div>
    </Fragment>
    )
}

export default PageTitle
