import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 0.3s ease-out;
  ${props =>
    props.contentHeight === null
      ? ``
      : props.collapseState === "open"
        ? `height : ${props.contentHeight}px`
        : `height:0px`};
`;

export default class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null
    };
  }

  componentDidMount() {
    const height = this.ref.clientHeight;
    this.setState({
      height
    });
  }

  render() {
    return (
      <Section
        className={this.props.className}
        contentHeight={this.state.height}
        innerRef={comp => (this.ref = comp)}
        collapseState={this.props.collapseState}
      >
        {this.props.children}
      </Section>
    );
  }
}
