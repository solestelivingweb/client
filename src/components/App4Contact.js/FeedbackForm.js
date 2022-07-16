import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { MDBBtn, MDBBadge } from "mdbreact";
import Fade from "react-reveal/Fade";

export default class FeedbackForm extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    community: "",
    moveInDate: "",
    unitSize: "",
    priceRange: "",
    errors: false
  };
  handleSubmit(e) {
    if (this.state.community === '' || this.state.email === '') {
      e.preventDefault();
      this.setState({
        errors: true
      })
    } else {
      e.preventDefault();
      const {
        name,
        email,
        phoneNumber,
        message,
        community,
        moveInDate,
        unitSize,
        priceRange,
      } = this.state;
      let templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Soleste Living",
        phoneNumber: phoneNumber,
        message_html: message,
        community: community,
        moveInDate: moveInDate,
        unitSize: unitSize,
        priceRange: priceRange,
      };
      emailjs.send(
        "gmail",
        "template_pS8Fo0Xc",
        templateParams,
        "user_Yc2XoxwXHDhbolo6bkiGw"
      );
      this.resetForm();
    }
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      community: "",
      moveInDate: "",
      unitSize: "",
      priceRange: "",
      errors: false
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <Fade>
        <div className="feedbackform">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Name"
                className="form-control rounded-0 mt-3"
              ></input>

              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Email"
                className="form-control rounded-0 mt-3"
              />
              {this.state.errors === true ? <MDBBadge color="warning">Required</MDBBadge> : ''}

              <input
                type="number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange.bind(this, "phoneNumber")}
                placeholder="Phone Number"
                className="form-control rounded-0 mt-3"
              />
              <select
                className="browser-default custom-select form-control rounded-0 mt-3"
                onChange={this.handleChange.bind(this, "community")}
                value={this.state.comunnity}
              >
                <option value=''>Community</option>
                <option value="Cityline">Cityline</option>
                {/* <option value="Grand Central">Grand Central</option> */}
                <option value="Hollywood">Hollywood</option>
                <option value="NoMi">NoMi Beach</option>
                <option value="Spring Gardens">Spring Gardens</option>
                <option value="Westgate">Westgate</option>
                <option value="On The Bay">On The Bay</option>
                <option value="Hollywood Village">Hollywood Village</option>
                <option value="On The Trail">On The Trail</option>
                <option value="Palm Station">Palm Station</option>

              </select>
              {this.state.errors === true ? <MDBBadge color="warning">Required</MDBBadge> : ''}

              <select
                className="browser-default custom-select form-control rounded-0 mt-3"
                onChange={this.handleChange.bind(this, "unitSize")}
                value={this.state.unitSize}
              >
                <option>Unit Size</option>
                <option value="Studio">Studio</option>
                <option value="1 Bedroom">1 Bedroom</option>
                <option value="2 Bedroom">2 Bedroom</option>
                <option value="3 Bedroom">3 Bedroom</option>
              </select>
              <input
                type="date"
                name="moveInDate"
                value={this.state.moveInDate}
                onChange={this.handleChange.bind(this, "moveInDate")}
                placeholder="Move-in Date"
                className="form-control rounded-0 mt-3 text-muted"
              />
              <input
                type="text"
                name="priceRange"
                value={this.state.priceRange}
                onChange={this.handleChange.bind(this, "priceRange")}
                placeholder="Price Range"
                className="form-control rounded-0 mt-3"
              />
              <textarea
                name="message"
                className="form-control rounded-0 mt-3"
                rows="10"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
                placeholder="Message"
              ></textarea>
            </div>
            {/* <button variant="primary" type="submit">
            Submit
          </button> */}
            <div className="text-center">
              <MDBBtn
                color="unique"
                className="button-on-white ml-0 pr-5 pl-5 mt-5"
                type="submit"
              >
                SUBMIT
              </MDBBtn>
            </div>
          </form>
        </div>
      </Fade >
    );
  }
}
