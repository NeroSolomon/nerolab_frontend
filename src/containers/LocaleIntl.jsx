import React from "react";
import { connect } from "react-redux";
import { addLocaleData, IntlProvider } from "react-intl";
import { ConfigProvider, Spin } from "antd";
import { changeLanguage } from "~/src/actions/language.js";

class LocaleIntl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const {
      language: { locale },
      dispatch,
    } = this.props;
    dispatch(changeLanguage(locale));
  }

  render() {
    const {
      language,
      language: { isFetching, locale },
    } = this.props;

    let result;
    if (isFetching && !language[locale]) {
      result = <Spin size="large" />;
    } else {
      // 添加语言包
      const appLocale = language[locale];
      addLocaleData(appLocale.data);

      result = (
        <ConfigProvider locale={appLocale.antd}>
          <IntlProvider locale={appLocale.locale} messages={appLocale.msg}>
            {this.props.children}
          </IntlProvider>
        </ConfigProvider>
      );
    }
    return result;
  }
}

function mapStateToProps(state) {
  const { language } = state;
  return {
    language,
  };
}

export default connect(mapStateToProps)(LocaleIntl);
