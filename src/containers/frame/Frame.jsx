import React from "react";
import { connect } from "react-redux";

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { language } = this.props;
    console.log(language, 999);
  }

  render() {
    return <div>frame</div>;
  }
}

function mapStateToProps(state) {
  const { language } = state;
  return {
    language,
  };
}

export default connect(mapStateToProps)(Frame);
