import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Buttons = React.createClass({
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <div className="ng-scope">
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link>
          <h2>Report</h2>
        </div>
      </div>
    );
  }
});

export default Buttons;
