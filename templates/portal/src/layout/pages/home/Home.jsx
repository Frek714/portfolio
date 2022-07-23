import React, { Component, Fragment } from "react";
import CustomCard from "../../../components/card/CustomCard";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <CustomCard />
            </div>
            <div className="col-6">
              <CustomCard />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <CustomCard />
            </div>
            <div className="col-6">
              <CustomCard />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <CustomCard />
            </div>
            <div className="col-6">
              <CustomCard />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
