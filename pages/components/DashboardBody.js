/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import * as Icon from 'react-feather';

export const DashboardBody = () => {
  return (
    <>
        <div className="app-content content ">
            <div className="content-overlay" />
            <div className="header-navbar-shadow" />
            <div className="content-wrapper container-xxl p-0">
            <div className="content-header row"></div>
            <div className="content-body">
                {/* Dashboard Ecommerce Starts */}
                <section id="dashboard-ecommerce">
                <div className="row match-height">
                    {/* Medal Card */}
                    <div className="col-xl-4 col-md-6 col-12">
                    <div className="card card-congratulation-medal">
                        <div className="card-body">
                        <h5>Congratulations 🎉 </h5>
                        <p className="card-text font-small-3">You now have</p>
                        <h3 className="mb-75 mt-2 pt-50">
                            <a href="#">48 Stakeholders</a>
                        </h3>
                        <button type="button" className="btn btn-primary">
                            View all
                        </button>
                        <img
                            src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/illustration/badge.svg"
                            className="congratulation-medal"
                            alt="Medal Pic"
                        />
                        </div>
                    </div>
                    </div>
                    {/*/ Medal Card */}
                    {/* Statistics Card */}
                    <div className="col-xl-8 col-md-6 col-12">
                    <div className="card card-statistics">
                        <div className="card-header">
                        <h4 className="card-title">Statistics</h4>
                        <div className="d-flex align-items-center">
                            <p className="card-text font-small-2 me-25 mb-0">
                            Updated 1 month ago
                            </p>
                        </div>
                        </div>
                        <div className="card-body statistics-body">
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                            <div className="d-flex flex-row">
                                <div className="avatar bg-light-primary me-2">
                                <div className="avatar-content">
                                    <Icon.TrendingUp className="avatar-icon"/>
                                    
                                </div>
                                </div>
                                <div className="my-auto">
                                <h4 className="fw-bolder mb-0">48</h4>
                                <p className="card-text font-small-3 mb-0">
                                    Stakeholders
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                            <div className="d-flex flex-row">
                                <div className="avatar bg-light-info me-2">
                                <div className="avatar-content">
                                    <Icon.User className="avatar-icon"/>
                                    
                                </div>
                                </div>
                                <div className="my-auto">
                                <h4 className="fw-bolder mb-0">50</h4>
                                <p className="card-text font-small-3 mb-0">Sector</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                            <div className="d-flex flex-row">
                                <div className="avatar bg-light-danger me-2">
                                <div className="avatar-content">
                                <Icon.Box className="avatar-icon"/>
                                    
                                </div>
                                </div>
                                <div className="my-auto">
                                <h4 className="fw-bolder mb-0">49</h4>
                                <p className="card-text font-small-3 mb-0">
                                    Follow Up
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                            <div className="d-flex flex-row">
                                <div className="avatar bg-light-success me-2">
                                <div className="avatar-content">
                                <Icon.DollarSign className="avatar-icon"/>
                                    
                                </div>
                                </div>
                                <div className="my-auto">
                                <h4 className="fw-bolder mb-0">23</h4>
                                <p className="card-text font-small-3 mb-0">
                                    Programs
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*/ Statistics Card */}
                </div>
                <div className="row match-height">
                    <div className="col-lg-4 col-12">
                    <div className="row match-height">
                        {/* Bar Chart - Orders */}
                        <div className="col-lg-6 col-md-3 col-6">
                        <div className="card">
                            <div className="card-body pb-50">
                            <h6>Orders</h6>
                            <h2 className="fw-bolder mb-1">2,76k</h2>
                            <div id="statistics-order-chart" />
                            </div>
                        </div>
                        </div>
                        {/*/ Bar Chart - Orders */}
                        {/* Line Chart - Profit */}
                        <div className="col-lg-6 col-md-3 col-6">
                        <div className="card card-tiny-line-stats">
                            <div className="card-body pb-50">
                            <h6>Profit</h6>
                            <h2 className="fw-bolder mb-1">6,24k</h2>
                            <div id="statistics-profit-chart" />
                            </div>
                        </div>
                        </div>
                        {/*/ Line Chart - Profit */}
                        {/* Earnings Card */}
                        <div className="col-lg-12 col-md-6 col-12">
                        <div className="card earnings-card">
                            <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                <h4 className="card-title mb-1">Earnings</h4>
                                <div className="font-small-2">This Month</div>
                                <h5 className="mb-1">$4055.56</h5>
                                <p className="card-text text-muted font-small-2">
                                    <span className="fw-bolder">68.2%</span>
                                    <span> more earnings than last month.</span>
                                </p>
                                </div>
                                <div className="col-6">
                                <div id="earnings-chart" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*/ Earnings Card */}
                    </div>
                    </div>
                    {/* Revenue Report Card */}
                    <div className="col-lg-8 col-12">
                    <div className="card card-revenue-budget">
                        <div className="row mx-0">
                        <div className="col-md-8 col-12 revenue-report-wrapper">
                            <div className="d-sm-flex justify-content-between align-items-center mb-3">
                            <h4 className="card-title mb-50 mb-sm-0">
                                Revenue Report
                            </h4>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center me-2">
                                <span className="bullet bullet-primary font-small-3 me-50 cursor-pointer" />
                                <span>Earning</span>
                                </div>
                                <div className="d-flex align-items-center ms-75">
                                <span className="bullet bullet-warning font-small-3 me-50 cursor-pointer" />
                                <span>Expense</span>
                                </div>
                            </div>
                            </div>
                            <div id="revenue-report-chart" />
                        </div>
                        <div className="col-md-4 col-12 budget-wrapper">
                            <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-sm dropdown-toggle budget-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                2020
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                2020
                                </a>
                                <a className="dropdown-item" href="#">
                                2019
                                </a>
                                <a className="dropdown-item" href="#">
                                2018
                                </a>
                            </div>
                            </div>
                            <h2 className="mb-25">$25,852</h2>
                            <div className="d-flex justify-content-center">
                            <span className="fw-bolder me-25">Budget:</span>
                            <span>56,800</span>
                            </div>
                            <div id="budget-chart" />
                            <button type="button" className="btn btn-primary">
                            Increase Budget
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*/ Revenue Report Card */}
                </div>
                <div className="row match-height">
                    {/* Company Table Card */}
                    <div className="col-lg-12 col-12">
                    <div className="card card-company-table">
                        <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table">
                            <thead>
                                <tr>
                                <th>Company</th>
                                <th>Category</th>
                                <th>Views</th>
                                <th>Revenue</th>
                                <th>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                        <div className="avatar-content">
                                        <img
                                            src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/toolbox.svg"
                                            alt="Toolbar svg"
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bolder">Dixons</div>
                                        <div className="font-small-2 text-muted">
                                        meguc@ruj.io
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-primary me-1">
                                        <div className="avatar-content">
                                        <i
                                            data-feather="monitor"
                                            className="font-medium-3"
                                        />
                                        </div>
                                    </div>
                                    <span>Technology</span>
                                    </div>
                                </td>
                                <td className="text-nowrap">
                                    <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">23.4k</span>
                                    <span className="font-small-2 text-muted">
                                        in 24 hours
                                    </span>
                                    </div>
                                </td>
                                <td>$891.2</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">68%</span>
                                    <i
                                        data-feather="trending-down"
                                        className="text-danger font-medium-1"
                                    />
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                        <div className="avatar-content">
                                        <img
                                            src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/parachute.svg"
                                            alt="Parachute svg"
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bolder">Motels</div>
                                        <div className="font-small-2 text-muted">
                                        vecav@hodzi.co.uk
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-success me-1">
                                        <div className="avatar-content">
                                        <i
                                            data-feather="coffee"
                                            className="font-medium-3"
                                        />
                                        </div>
                                    </div>
                                    <span>Grocery</span>
                                    </div>
                                </td>
                                <td className="text-nowrap">
                                    <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">78k</span>
                                    <span className="font-small-2 text-muted">
                                        in 2 days
                                    </span>
                                    </div>
                                </td>
                                <td>$668.51</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">97%</span>
                                    <i
                                        data-feather="trending-up"
                                        className="text-success font-medium-1"
                                    />
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                        <div className="avatar-content">
                                        <img
                                            src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/brush.svg"
                                            alt="Brush svg"
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bolder">Zipcar</div>
                                        <div className="font-small-2 text-muted">
                                        davcilse@is.gov
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning me-1">
                                        <div className="avatar-content">
                                        <i
                                            data-feather="watch"
                                            className="font-medium-3"
                                        />
                                        </div>
                                    </div>
                                    <span>Fashion</span>
                                    </div>
                                </td>
                                <td className="text-nowrap">
                                    <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">162</span>
                                    <span className="font-small-2 text-muted">
                                        in 5 days
                                    </span>
                                    </div>
                                </td>
                                <td>$522.29</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">62%</span>
                                    <i
                                        data-feather="trending-up"
                                        className="text-success font-medium-1"
                                    />
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                        <div className="avatar-content">
                                        <img
                                            src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/star.svg"
                                            alt="Star svg"
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bolder">Owning</div>
                                        <div className="font-small-2 text-muted">
                                        us@cuhil.gov
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-primary me-1">
                                        <div className="avatar-content">
                                        <i
                                            data-feather="monitor"
                                            className="font-medium-3"
                                        />
                                        </div>
                                    </div>
                                    <span>Technology</span>
                                    </div>
                                </td>
                                <td className="text-nowrap">
                                    <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">214</span>
                                    <span className="font-small-2 text-muted">
                                        in 24 hours
                                    </span>
                                    </div>
                                </td>
                                <td>$291.01</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">88%</span>
                                    <i
                                        data-feather="trending-up"
                                        className="text-success font-medium-1"
                                    />
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                        <div className="avatar-content">
                                        <img
                                            src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/book.svg"
                                            alt="Book svg"
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bolder">Cafés</div>
                                        <div className="font-small-2 text-muted">
                                        pudais@jife.com
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-success me-1">
                                        <div className="avatar-content">
                                        <i
                                            data-feather="coffee"
                                            className="font-medium-3"
                                        />
                                        </div>
                                    </div>
                                    <span>Grocery</span>
                                    </div>
                                </td>
                                <td className="text-nowrap">
                                    <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">208</span>
                                    <span className="font-small-2 text-muted">
                                        in 1 week
                                    </span>
                                    </div>
                                </td>
                                <td>$783.93</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">16%</span>
                                    <i
                                        data-feather="trending-down"
                                        className="text-danger font-medium-1"
                                    />
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                        <div className="avatar-content">
                                        <img
                                            src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/rocket.svg"
                                            alt="Rocket svg"
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bolder">Kmart</div>
                                        <div className="font-small-2 text-muted">
                                        bipri@cawiw.com
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning me-1">
                                        <div className="avatar-content">
                                        <i
                                            data-feather="watch"
                                            className="font-medium-3"
                                        />
                                        </div>
                                    </div>
                                    <span>Fashion</span>
                                    </div>
                                </td>
                                <td className="text-nowrap">
                                    <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">990</span>
                                    <span className="font-small-2 text-muted">
                                        in 1 month
                                    </span>
                                    </div>
                                </td>
                                <td>$780.05</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">78%</span>
                                    <i
                                        data-feather="trending-up"
                                        className="text-success font-medium-1"
                                    />
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar rounded">
                                        <div className="avatar-content">
                                        <img
                                            src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/icons/speaker.svg"
                                            alt="Speaker svg"
                                        />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bolder">Payers</div>
                                        <div className="font-small-2 text-muted">
                                        luk@izug.io
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <div className="avatar bg-light-warning me-1">
                                        <div className="avatar-content">
                                        <i
                                            data-feather="watch"
                                            className="font-medium-3"
                                        />
                                        </div>
                                    </div>
                                    <span>Fashion</span>
                                    </div>
                                </td>
                                <td className="text-nowrap">
                                    <div className="d-flex flex-column">
                                    <span className="fw-bolder mb-25">12.9k</span>
                                    <span className="font-small-2 text-muted">
                                        in 12 hours
                                    </span>
                                    </div>
                                </td>
                                <td>$531.49</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <span className="fw-bolder me-1">42%</span>
                                    <i
                                        data-feather="trending-up"
                                        className="text-success font-medium-1"
                                    />
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*/ Company Table Card */}
                </div>
                </section>
                {/* Dashboard Ecommerce ends */}
            </div>
            </div>
        </div>
        <div className="sidenav-overlay" />
        <div className="drag-target" />
        <footer className="footer footer-static footer-light">
            <p className="clearfix mb-0">
            <span className="float-md-start d-block d-md-inline-block mt-25">
                <a
                className="ms-25"
                href="https://1.envato.market/pixinvent_portfolio"
                target="_blank"
                />
                <span className="d-none d-sm-inline-block">All rights Reserved</span>
            </span>
            <span className="float-md-end d-none d-md-block">
                {" "}
                Made with
                <i data-feather="heart" />
            </span>
            </p>
        </footer>
        <button className="btn btn-primary btn-icon scroll-top" type="button">
            <i data-feather="arrow-up" />
        </button>
    </>

  )
}
