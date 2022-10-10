/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Resetpassword from './resetPassword'
  
  const index = () => {
    return (
      <>
          <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui"
        />
        <meta
            name="description"
            content="Vuexy admin is super flexible, powerful, clean & modern responsive bootstrap 4 admin template with unlimited possibilities."
        />
        <meta
            name="keywords"
            content="admin template, Vuexy admin template, dashboard template, flat admin template, responsive admin template, web app"
        />
        <meta name="author" content="PIXINVENT" />
        <title>Reset - Nest Stakeholder Management System</title>
        <link
            rel="apple-touch-icon"
            href="./images/ico/apple-icon-120.html"
        />
        <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/ico/favicon.ico"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
            rel="stylesheet"
        />
        {/* BEGIN: Vendor CSS*/}
        <link
            rel="stylesheet"
            type="text/css"
            href="./vendors/css/vendors.min.css"
        />
        {/* END: Vendor CSS*/}
        {/* BEGIN: Theme CSS*/}
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/bootstrap.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/bootstrap-extended.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/colors.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/components.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/themes/dark-layout.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/themes/bordered-layout.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/themes/semi-dark-layout.min.css"
        />
        {/* BEGIN: Page CSS*/}
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/core/menu/menu-types/vertical-menu.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/plugins/forms/form-validation.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="./css/pages/authentication.css"
        />
        {/* END: Page CSS*/}
        {/* BEGIN: Custom CSS*/}
    </Head>
    <main className="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  " style={{backgroundColor: '#fff'}} data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
        <Resetpassword />
    </main>
  
      </>
    )
  }
  
  export default index

