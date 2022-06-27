import Layout from '../components/Layout.js'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { ApolloClient,InMemoryCache,ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://swift-sprint.testingnow.me/graphql',
    cache : new InMemoryCache()
});
function MyApp({ Component, pageProps, ...appProps }) {
  const usingLayout = ['/404','/500'].includes(appProps.router.pathname);
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ApolloProvider client={client}>
      {
        usingLayout ? <Component {...pageProps} /> :
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
      </ApolloProvider>
    </>
   
  )
}

export default MyApp
