import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Button, Icon, Card, Row, Col, Navbar, NavItem, CardTitle} from 'react-materialize';
import params from './../../config/config';

class Listing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
      componentDidMount() {
        fetch(params.assetsApiUrl + '/assets')
        .then(res => res.json())
        .then(res => {                  
            this.setState({
                data:res
            });
        });
        }
    render() {
       
        return (
            <div className="asset-listings assets-thumbnail">
            {/* Asset Listings Block */}
            {
                this.state.data.map(function (asset) {
                    {/* Asset Card */}
                    return <div className="card modal-trigger animated small fadeInDown" data-target="asset-detail" key={asset.id}>
                            {/* Card Overlay - Selection */}
                            <div className="card-overlay">
                                <div className="select">
                                    <label>
                                        <input type="checkbox" className="filled-in" name={asset.assetFileName} />
                                        <span></span>
                                    </label>
                                </div>
                            </div>
                            {/* Card Image */}
                            <div className="card-image">
                                <img src={asset.assetFileLocation} />
                            </div>
                            {/* Card Content */}
                            <div className="card-content">
                                <span className="asset-name">{asset.assetTitle}</span>
                                <div className="right">
                                    <span className="badge img-format">{asset.assetFileType}</span>
                                </div>
                            </div>
                            {/* Card Action */}
                            <div className="card-action">
                                <span className="views">
                                    <img src="../../../src/assets/images/icons/view-icn.png" alt="Views" /> {asset.assetViewCount}
                                </span>
                                <span className="downloads">
                                    <img src="../../../src/assets/images/icons/download-icn-sm.png" alt="Downloads" /> {asset.assetDownloadCount}
                                </span>
                                <div className="right">
                                    <a className="add-wishlist"></a>
                                </div>
                            </div>
                        </div>
                })
            }
            </div>
        );
    }
}

export default Listing;