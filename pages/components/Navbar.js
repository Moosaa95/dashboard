/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'
import * as Icon from 'react-feather';
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div>
      <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
  <div className="navbar-container d-flex content">
    <ul className="nav navbar-nav align-items-center ms-auto">
      <li className="nav-item d-none d-lg-block">
        <a className="nav-link nav-link-style">
          <Icon.Moon className="ficon"/>
        </a>
      </li>
      <li className="nav-item nav-search">
        <a className="nav-link nav-link-search">
          <Icon.Search className="ficon"/>
        </a>
        <div className="search-input">
          <div className="search-input-icon">
            <Icon.Search />
          </div>
          <input
            className="form-control input"
            type="text"
            placeholder="Explore Vuexy..."
            tabIndex={-1}
            data-search="search"
          />
          <div className="search-input-close">
            <Icon.X />
          </div>
          <ul className="search-list search-list-main" />
        </div>
      </li>
      <li className="nav-item dropdown dropdown-user">
        <a
          className="nav-link dropdown-toggle dropdown-user-link"
          id="dropdown-user"
          href="#"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name fw-bolder">Aiivon Innovation Hub</span>
            <span className="user-status">Admin</span>
          </div>
          <span className="avatar">
            <img
              className="round"
              src="/portrait/small/avatar-s-11.jpg"
              alt="avatar"
              height={40}
              width={40}
            />
            <span className="avatar-status-online" />
          </span>
        </a>
        <div
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdown-user"
        >
          <a
            className="dropdown-item"
            href="page-account-settings-account.html"
          >
            <Icon.Settings className="me-50"/>
             Settings
          </a>
          <a className="dropdown-item" href="auth-login-cover.html">
            <Icon.Power className="me-50"/> Logout
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}
