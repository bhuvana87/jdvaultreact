import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Button, Icon, Card, Row, Col, Navbar, NavItem, CardTitle} from 'react-materialize';
import params from './../../../config/config';

class Sidebar extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: []
        };
    }
      componentDidMount() {
        fetch(params.layoutApiUrl + '/sidenavlinks?_sort=priority&_order=asc')
        .then(res => res.json())
        .then(res => {                  
            this.setState({
                data:res
            });
        });
        }
    render() {
       
        return (
            <aside className="sidebar">
                {/* Sidebar Navigation Block */}
                <div id="sideNav" className="side-menu">
                    <ul className="list">
                       {
                        this.state.data.map(function (item) {
                            {/* Sidebar Navigation Links  */}
                            return <li key={item.id}><Link to={item.link} className="waves-effect waves-dark">
                                            <i className="material-icons">{item.iconText}</i>
                                            <p>{item.name}</p>
                                        </Link>
                                    </li>
                        })
                        }
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Sidebar;