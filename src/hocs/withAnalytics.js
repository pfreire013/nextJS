import React, { Component } from 'react'
import ReactGA from 'react-ga';

export default () => Composed => 
  class extends Component {
    static async getInitialProps(ctx) {
      //return loadGetInitialProps(Composed, ctx);
      const composedInitial = Composed.getInitialProps
        const composed = composedInitial ? await composedInitial(ctx) : {}
  
        return composed;
    }


    componentDidMount() {
      console.log('PAGE_VIEW')
      ReactGA.initialize('ID_ANALYTICS');
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />
    }
  }