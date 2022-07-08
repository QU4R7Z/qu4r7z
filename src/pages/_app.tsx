import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Navbar from '@/components/Navbar';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <div className='flex flex-col items-center justify-center text-center'>
        <footer className='absolute bottom-2 text-white'>
          © {new Date().getFullYear()} By <ArrowLink href='/'>QU4R7Z</ArrowLink>
        </footer>
      </div>
    </Layout>
  );
}

export default MyApp;
