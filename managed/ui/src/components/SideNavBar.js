// Copyright (c) YugaByte, Inc.

import React, { Component } from 'react';
import { Link, IndexLink, withRouter } from 'react-router'

class NavLink extends Component {
  render () {
    const { router, index, to, children, ...props, icon } = this.props
    let isActive;
    
    isActive = router.isActive(to, index);
    const LinkComponent = index ?  IndexLink : Link;

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent to={to} {...props}><i className={icon}></i>{children}</LinkComponent>
      </li>
    )
  }
}

NavLink = withRouter(NavLink)


export default class SideNavBar extends Component {

  render() {
    return (
      <div className="left-col-container">
        <div className="col-md-3 left_col" >
          <div className="left_col scroll-view">
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
              <div className="menu_section">
                <ul className="nav side-menu">
                  <NavLink to="/" index={true} icon="fa fa-home">
                     Home
                  </NavLink>
                  <NavLink to="/universes" icon="fa fa-globe">
                     Universes
                  </NavLink>
                  <NavLink to="/alerts" icon="fa fa-bell-o">
                     Alerts
                  </NavLink>
                  <NavLink to="metrics" icon="fa fa-line-chart">
                    Metrics
                  </NavLink>
                  <NavLink to="docs" icon="fa fa-file-text-o">
                     Docs
                  </NavLink>
                  <NavLink to="support" icon="fa fa-phone">
                    Support
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}