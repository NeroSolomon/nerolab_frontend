import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { DatePicker } from "antd";

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FormattedMessage id="guide.tips" />
        <DatePicker />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { language } = state;
  return {
    language,
  };
}

export default connect(mapStateToProps)(Frame);
