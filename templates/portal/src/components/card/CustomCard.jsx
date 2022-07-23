import React, { Component, Fragment } from "react";
import image from "../../resources/foglie-bg-sito.jpg";

export default class CustomCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="card mb-3">
          <img src={image} className="card-img-top" style={{width: 'auto', height: 'auto'}} alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
