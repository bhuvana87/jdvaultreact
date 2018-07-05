import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Assets from './assetlisting/assetlisting.jsx';
import Insights from './insights/insights.jsx';
import ApproveAssets from './approve-assets/approveAssets.jsx';
import Settings from './settings/settings.jsx';
import '../assets/css/styles.scss'; 

class App extends Component{
    render() {
        return(
        <Router>
        <div>
            {/* Routing Configuration */}
            <Switch>
                <Route exact path='/' component={Assets} />
                <Route exact path='/Assets' component={Assets} />
                <Route exact path='/Insights' component={Insights} />
                <Route exact path='/ApproveAssets' component={ApproveAssets} />
                <Route exact path='/Settings' component={Settings} />
            </Switch>
        </div>
        </Router>
        );
    }
}

export default App;