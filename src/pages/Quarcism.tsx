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
          <h1 className='tracking-wide text-white'>
            쿼시즘(Quarcism) - 개소리의 시작
          </h1>
          <div className='relative flex items-center py-5'>
            <div className='flex-grow border-t border-white'></div>
          </div>
          <p className='text-xl text-white'>
            &quot;편한대로 하고 싶은거 마음대로 하면서 사세요. 단, 다른 사람도
            이와 같은 권리가 있습니다.&quot;
            <br />
            <br />
            개개인이 하고 싶은 일을 찾아, 그 부분만을 발전시켜 서로가 공유해낼
            수 있다면, 그 개개인들이 모인 집단의 발전이 이루어집니다.
            <br />
            <br />
          </p>
        </div>
      </section>
    </Layout>
  );
}
