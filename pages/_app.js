import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import * as React from 'react'

import Layout from '../components/layout'
import '../styles/globals.css'

// Route Events.
Router.events.on('routerChangeStart', () => NProgress.start())
Router.events.on('routerChangeComplete', () => NProgress.done())
Router.events.on('routerChangeError', () => NProgress.done())

NProgress.configure({
  showSpinner: false
})

function MyApp({ Component, pageProps }) {

  // Loading Bar
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  // loading bar end

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
