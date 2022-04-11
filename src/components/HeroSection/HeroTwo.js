import React, { Component } from "react";

const initData = {
  heading: "Digitally traceable produce grown in Nigeria",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi, voluptate quaerat iure quidem expedita eos a blanditiis sint modi est error veniam facere eum at doloribus amet, nobis ut.",
  btnText: "What is digital traceability?",
  heroThumb: "/img/VID-20220312-WA0028.mp4",
};

class HeroSection extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.setState({
      data: initData,
    });
  }
  render() {
    return (
      <section
        id="home"
        className="section welcome-area bg-inherit h-100vh overflow-hidden"
      >
        <div className="shapes-container">
          <video
            style={{ filter: "brightness(65%)" }}
            className="bg-shape-vid"
            autoplay="true"
            muted="true"
            loop="true"
            src={this.state.data.heroThumb}
            alt=""
          />
        </div>
        <div className="row align-items-center h-100">
          {/* Welcome Intro Start */}
          <div
            className="col-12 col-md-6"
            style={{ paddingLeft: "7%", marginTop: "7%" }}
          >
            <div className="welcome-intro">
              <h2 style={{ color: "white" }}>{this.state.data.heading}</h2>
              <p style={{ color: "white", lineHeight: "4vh" }} className="my-4">
                {this.state.data.content}
              </p>
              <div className="button-group store-buttons d-flex">
                <a href="/#" className="btn sApp-btn text-uppercase">
                  {this.state.data.btnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
