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
      <header className='sticky top-0'>
        <Navbar />
      </header>
      <div className='relative'>
        <Component {...pageProps} />
      </div>
      <div className='sticky flex flex-col items-center justify-center text-center'>
        <footer className='absolute bottom-2 text-white'>
          <ArrowLink href='https://github.com/QU4R7Z'>
            © {new Date().getFullYear()} By QU4R7Z
          </ArrowLink>
        </footer>
      </div>
    </Layout>
  );
}

export default MyApp;
