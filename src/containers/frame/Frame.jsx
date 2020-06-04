import React from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { DatePicker, Upload, Button, message } from "antd";

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = {
      name: "file",
      action: "http://localhost:3001/files/postFile",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <div>
        <FormattedMessage id="guide.tips" />
        <DatePicker />
        <Upload {...props}>
          <Button>Click to Upload</Button>
        </Upload>
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
