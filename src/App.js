import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class App extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t('Welcome to React')}</h2>;
  }
}

export default withNamespaces()(App);
