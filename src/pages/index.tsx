import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='relative bg-black'>
          <div className='flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='text-white'>QU4R7Z.</h1>
            <div className='mt-5 text-sm text-pink-600'>
              <ArrowLink href='/Quarcism'>프로젝트 둘러보기</ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
