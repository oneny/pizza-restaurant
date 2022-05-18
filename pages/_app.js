import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return ( // this component gonna show us out navbar and footer in every page
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  );
}

export default MyApp;
