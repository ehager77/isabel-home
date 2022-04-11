import React, { Component } from "react";

const initData = {
  heading: "Digital agriculture for",
  headingTwo: "improved livelihoods",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.",
  btnText: "Get in touch",
  iconClass: "fas fa-play",
  heroThumb: "/img/features_thumb.png",
  btnText: "Learn More",
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
        className="section welcome-area bg-overlay d-flex align-items-center overflow-hidden"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Welcome Intro Start */}
            <div
              className="col-12 col-md-12 col-lg-10 col-xs-12"
              style={{ paddingLeft: "8%" }}
            >
              <div className="welcome-intro">
                <h1 className="text-white">
                  {this.state.data.heading}
                  <br />
                  {this.state.data.headingTwo}
                </h1>
                <p className="text-white my-4">{this.state.data.content}</p>
                {/* Subscribe Form */}
              </div>
              <div className="col-12 col-md-5 col-lg-6" style={{paddingLeft: "0px"}}>
                {/* Welcome Thumb */}
                <div className="welcome-thumb text-center mx-auto" style={{paddingTop: "0px"}}>
                  <div className="button-group store-buttons d-flex">
                    <a href="/#" className="btn sApp-btn text-uppercase">
                      {this.state.data.btnText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          {/* Welcome Thumb */}
          <div className="welcome-thumb">
            <img style={{marginLeft: "40px", marginTop: "24px"}} src={this.state.data.heroThumb} alt="" />
          </div>
        </div>
        <div className="shape-bottom">
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ transform: "scale(1, -1)" }}
          >
            <path className="fill" d="M0,6V0h1000v100L0,6z" />
          </svg>
        </div>
        {/* Shape Bottom */}
      </section>
    );
  }
}

export default HeroSection;
