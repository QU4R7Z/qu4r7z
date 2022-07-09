import * as React from 'react';

import Layout from '@/components/layout/Layout';
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

export default function QuarcismPage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <section className='relative bg-black'>
        <div className='inline-flexflex mr-4 min-h-screen flex-col p-4 text-left'>
          <h1 className='tracking-wide text-white'>쿼시즘(Quarcism)</h1>
          <div className='relative flex items-center py-5'>
            <div className='flex-grow border-t border-white'></div>
          </div>
          <p className='text-xl text-white'>
            다른 이에게 피해를 주지 않는 한에서 최대한의 자유.
          </p>
        </div>
      </section>
    </Layout>
  );
}
