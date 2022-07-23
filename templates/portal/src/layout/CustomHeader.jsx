import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import "../styles/CustomHeader.css";

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navlinks: [
        {
          label: "Home",
          link: "/home"
        },
        {
          label: "Chi siamo",
          link: "/chi-siamo"
        },
        {
          label: "I nostri prodotti",
          link: "i-nostri-prodotti"
        },
        {
          label: "Contatti",
          link: "contatti"
        },
        {
          label: "News",
          link: "news"
        },
      ]
    };
  }

  render() {

    const {navlinks} = this.state 

    return (
      <div>
        <Navbar navlinks={navlinks}/>
      </div>
    );
  }
}
