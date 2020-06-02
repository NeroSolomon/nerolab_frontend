import React from "react";
import { connect } from "react-redux";
import { addLocaleData, IntlProvider } from "react-intl";
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
      language: { locale },
    } = this.props;
    const appLocale = language[locale] || {};

    // 添加语言包
    addLocaleData(appLocale.data || {});

    return (
      <IntlProvider
        locale={appLocale.locale || "en"}
        messages={appLocale.msg || {}}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  const { language } = state;
  return {
    language,
  };
}

export default connect(mapStateToProps)(LocaleIntl);
