import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class App extends Component {
  render() {
    const { t, i18n } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return (
      <div>
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('zh')}>zh-hant</button>
        <h1>{t('WelcomeToReact')}</h1>
      </div>
    );
  }
}

export default withNamespaces()(App);
