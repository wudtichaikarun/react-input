import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

function getDisplayName(WrappedComponent) {
  return (
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'
  );
}

const logColor = {
  primary: '#006E86',
  secondary: '#E38300',
  ternary: '#008718'
};

function logProps(WrappedComponent) {
  class Enhance extends Component {
    // component name for react dev tool
    static displayName = `LogProps(${getDisplayName(
      WrappedComponent
    )})`;

    // component name for console.log
    componentName = getDisplayName(WrappedComponent);

    componentDidMount() {
      // eslint-disable-next-line no-console
      console.group(
        `%cLogProps Component ${
          this.componentName
        } method componentDidMount`,
        `color:${logColor.primary};`
      );
      // eslint-disable-next-line no-console
      console.log(
        '%cProps',
        `color:${logColor.primary};`,
        this.props
      );
      // eslint-disable-next-line no-console
      console.groupEnd();
    }

    componentWillReceiveProps(nextProps) {
      // eslint-disable-next-line no-console
      console.group(
        `%cLogProps Component ${
          this.componentName
        } method componentWillReceiveProps`,
        `color:${logColor.ternary};`
      );
      // eslint-disable-next-line no-console
      console.log(
        '%cPrev Props',
        `color:${logColor.secondary};`,
        this.props
      );
      // eslint-disable-next-line no-console
      console.log(
        '%cNext Props',
        `color:${logColor.ternary};`,
        nextProps
      );
      // eslint-disable-next-line no-console
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatic(Enhance, WrappedComponent);
}

export default logProps;
