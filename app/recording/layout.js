// import { TabGroup } from '@/ui/tab-group';
import React from 'react';
import { Boundary } from '../../common/component/boundary';
import RecordingSetting from './component/ClientRecordingSetting';

const title = 'Streaming';

// export const metadata = {
//   title,
//   openGraph: {
//     title,
//     images: [`/api/og?title=${title}`],
//   },
// };

export default async function Layout({
  children,
}) {
  return (
    <div className="space-y-1">
      <Boundary animateRerendering={false} labels={['recording setting']} size="small">
        <li className='text-xs text-neutral-600'>해당 부분은 녹취 설정 영역으로 사용자 선택</li>
          <RecordingSetting/>
        </Boundary>
      <Boundary animateRerendering={false} labels={['recording info']} size="small">
        <li className='text-xs text-neutral-600'>해당 부분은 스크립트 정보를 이용해야 표출 가능</li>
        {children}
      </Boundary>
    </div>
  );
}
