import React, { Component } from 'react';
import { connect } from 'dva';
import { Form } from 'antd';
import './style.scss';


@Form.create()
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  componentDidMount() {
  }



  render() {

    return (
      <div className="dashboard-container">
        <h1>jizhang </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Dashboard);