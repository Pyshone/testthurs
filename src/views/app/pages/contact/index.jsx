import React, { Fragment } from 'react'
import PageTitle from '../../../../components/widgets/pageTitle'
import ContactTable from '../../../../components/sections/contact/contactTable'
import Banner from '../../../../components/sections/home/banner'

const Contact = () => {
  return (
   <Fragment>
   <Banner title="Contact"/>
  <ContactTable/>
   </Fragment>
  )
}

export default Contact
