/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import PersonalSettings from './personal-settings'




export default function Home() {
  return (
    <div>
      <Head>

  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui"
  />
  <meta
    name="description"
    content=""
  />
  <meta
    name="keywords"
    content=""
  />
  <meta name="author" content="PIXINVENT" />
  <title>Personal Settings - Nest Management System</title>
  <link
    rel="apple-touch-icon"
    href="/images/ico/apple-icon-120.html"
  />
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/ico/favicon.ico"
  />
  <link
   rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
    
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="./vendors/css/vendors.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="./vendors/css/charts/apexcharts.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="./vendors/css/extensions/toastr.min.css"
  />
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
  <link
    rel="stylesheet"
    type="text/css"
    href="./css/core/menu/menu-types/vertical-menu.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="./css/pages/dashboard-ecommerce.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="./css/plugins/charts/chart-apex.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="./css/plugins/extensions/ext-component-toastr.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="./css/style.css"
  />


      </Head>

      <main
        className="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col=""
      >
        <Navbar />
        <Sidebar />
        <PersonalSettings />
       






ß


        <Script src="./vendors/js/vendors.min.js"></Script>
        <Script src="./vendors/js/charts/apexcharts.min.js"></Script>
        <Script src="./vendors/js/extensions/toastr.min.js"></Script>
        <Script src="./path/to/dist/feather.js"></Script>
        <Script src="./js/core/app-menu.min.js"></Script>
        <Script src="./js/core/app.min.js"></Script>
        <Script src="./js/scripts/customizer.min.js"></Script>
        <Script src="./js/scripts/pages/dashboard-ecommerce.min.js"></Script>
      </main>

      
    </div>
  )
}
