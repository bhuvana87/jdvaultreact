import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Button, Icon, Card, Row, Col, Navbar, NavItem, CardTitle} from 'react-materialize';
import Header from '../shared/header/header.jsx';
import Sidebar from '../shared/sidebar/sidebar.jsx';
import Input from '../forms/input.jsx';
import Preloader from '../shared/preloader/preloader.jsx';
import Listing from './listing.jsx';

class Assets extends Component{
    render() {
        return(
        <div>
          <Preloader/>{/* Preloader */}
          <Header />{/* Header */}
          <Sidebar />{/* Sidebar */}

          {/* Main Content Block */}
          <main className="main-panel">
            {/* Assets listings section */}
            <section id="assets">
              <Listing />
              <Input/>
            </section>
          </main>
        </div>
        );
    }
}
export default Assets;