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
          <h1 className='tracking-wide text-white'>쿼시즘(Quarcism) 선언</h1>
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
            그리고 같은 분야를 선호하는 사람이 한 명이 아니므로, 경쟁을 하며
            서로 더 효율적이고 나은 방법을 찾게 됩니다.
            <div className='relative flex items-center py-5'>
              <div className='flex-grow border-t border-white'></div>
            </div>
            <div className='text-center'>
              국가가 없는 걸 상상해봐요
              <br />
              그건 어려운 일이 아니죠
              <br />
              무언가를 위해 죽이거나 죽을 필요 없고
              <br />
              종교도 필요하지 않겠죠
              <br />
              상상해봐요 모든 사람들이
              <br />
              평화 속에서 살아가는 걸<br />
              당신은 나를 몽상가라 말하겠지만
              <br />
              난 혼자가 아니에요
              <br />
              언젠가 당신도 우리와 함께하길 바라요
              <br />
              <strong>그러면 세상은 하나가 될거에요</strong>
              <br />
              <br />
              John Lennon -Imagine-
            </div>
            <div className='relative flex items-center py-5'>
              <div className='flex-grow border-t border-white'></div>
            </div>
          </p>
        </div>
      </section>
    </Layout>
  );
}
