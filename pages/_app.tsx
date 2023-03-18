import '../styles/globals.css';
import Layout from '../components/Layout';
import { GeistProvider, CssBaseline } from '@geist-ui/core';

export default function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}
