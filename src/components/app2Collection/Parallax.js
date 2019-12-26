import React from "react";

export default class Parallax extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      translateY: 0
    };
  }
  UNSAFE_componentDidMount() {
    document.addEventListener("scroll", this.calculateTranslation);
  }

  compnentWillUnmount() {
    document.removeEventListener("scroll", this.calculateTranslation);
  }

  calculateTranslation = () =>
    this.setState(() => ({ translateY: window.scrollY / 5 }));

  render() {
    const { background, children } = this.props;
    const { translateY } = this.state;
    const transform = `translate3d(-50%, -${translateY}px, 0)`;
    return (
      <div className="parallax">
        <img src={background} style={{ transform }} alt="" />
        {children}
      </div>
    );
  }
}
