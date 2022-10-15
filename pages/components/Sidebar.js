/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import * as Icon from 'react-feather';

export const Sidebar = () => {
  return (
    <div>
         <div
  className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
  data-scroll-to-active="true"
>
  <div className="navbar-header">
    <ul className="nav navbar-nav flex-row">
      <li className="nav-item me-auto">
        <a className="navbar-brand" href="/">
          <span className="brand-logo">
            <img
              src="/portrait/small/avatar-s-6.jpg"
              alt="png"
              height={32}
              width={100}
            />
          </span>
        </a>
      </li>
    </ul>
  </div>
  <div className="shadow-bottom" />
  <div className="main-menu-content">
    <ul
      className="navigation navigation-main"
      id="main-menu-navigation"
      data-menu="menu-navigation"
    >
      <li className="active nav-item">
        <a className="d-flex align-items-center" href="/">
        <Icon.Home />
          <span className="menu-title text-truncate" data-i18n="Dashboards">
            Dashboards
          </span>
        </a>
      </li>
      <li className=" nav-item">
        <a className="d-flex align-items-center" href="#">
        <Icon.User />
          <span className="menu-title text-truncate" data-i18n="Invoice">
            Stakeholders
          </span>
        </a>
        <ul className="menu-content">
          <li>
            <a
              className="d-flex align-items-center"
              href="#"
            >
              <Icon.Circle />
              <span className="menu-item text-truncate" data-i18n="List">
                Add Stakeholder
              </span>
            </a>
          </li>
          <li>
            <a
              className="d-flex align-items-center"
              href="#"
            >
              <Icon.Circle />
              <span className="menu-item text-truncate" data-i18n="List">
                Stakeholder List
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <a className="d-flex align-items-center" href="#">
        <Icon.FileText />
          <span className="menu-title text-truncate" data-i18n="Invoice">
            Follow Up
          </span>
        </a>
        <ul className="menu-content">
          <li>
            <a
              className="d-flex align-items-center"
              href="#"
            >
              <Icon.Circle />
              <span className="menu-item text-truncate" data-i18n="List">
                Add Follow Up
              </span>
            </a>
          </li>
          <li>
            <a
              className="d-flex align-items-center"
              href="#"
            >
              <Icon.Circle />
              <span className="menu-item text-truncate" data-i18n="List">
                Follow Up List
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <a className="d-flex align-items-center" href="#">
        <Icon.FileText />
          <span className="menu-title text-truncate" data-i18n="Invoice">
            Programs
          </span>
        </a>
        <ul className="menu-content">
          <li>
            <a
              className="d-flex align-items-center"
              href="#"
            >
              <Icon.Circle />
              <span className="menu-item text-truncate" data-i18n="List">
                Add Program
              </span>
            </a>
          </li>
          <li>
            <a
              className="d-flex align-items-center"
              href="#"
            >
              <Icon.Circle />
              <span className="menu-item text-truncate" data-i18n="List">
                Program List
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li className=" nav-item">
        <a className="d-flex align-items-center" href="/notes">
        <Icon.Book />
          <span className="menu-title text-truncate" data-i18n="Modal Examples">
            Notes
          </span>
        </a>
      </li>
      <li className=" nav-item">
        <a className="d-flex align-items-center" href="/settings">
        <Icon.Settings />
          <span className="menu-title text-truncate" data-i18n="Modal Examples">
            Settings
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>

    </div>
  )
}
