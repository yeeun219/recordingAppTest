'use client';
import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

export default async function Home() {
    return (
        <>
        <div className="w-[1280px] h-[600px] relative bg-white">
    <div className="w-[289px] h-[83px] left-[33px] top-[30px] absolute rounded-[5px] border border-purple-500">
        <div className="w-[110px] left-[20px] top-[20px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-blue-700 text-[22px] font-semibold font-['Noto Sans'] leading-[37px]">이태리/남부</div>
            <div className="self-stretch h-[3px] bg-blue-700"   />
        </div>
        <div className="w-[110px] left-[159px] top-[20px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-blue-700 text-opacity-30 text-[22px] font-semibold font-['Noto Sans'] leading-[37px]">
                이태리/남부</div>
            <div className="self-stretch h-[3px] bg-blue-700 bg-opacity-0"   />
        </div>
    </div>
    <div className="w-[460px] h-[90px] left-[342px] top-[27px] absolute rounded-[5px] border border-purple-500">
        <div
            className="px-[30px] py-[13px] left-[20px] top-[20px] absolute bg-blue-700 border border-white justify-center items-center gap-[9px] inline-flex">
            <div className="text-white text-lg font-semibold font-['Noto Sans'] leading-normal">자세히보기</div>
        </div>
        <div
            className="px-[30px] py-[13px] left-[250px] top-[20px] absolute bg-white border border-blue-700 justify-center items-center gap-[9px] inline-flex">
            <div className="text-blue-700 text-lg font-semibold font-['Noto Sans'] leading-normal">자세히보기</div>
        </div>
    </div>
    <div className="w-[1180px] h-[330px] left-[33px] top-[135px] absolute">
        <img className="w-[590px] h-[330px] left-0 top-0 absolute"  src="https://via.placeholder.com/590x330"   />
        <div className="w-[590px] h-[330px] left-[590px] top-0 absolute bg-blue-700"   />
        <div
            className="left-[640px] top-[105px] absolute text-white text-base font-normal font-['Noto Sans'] leading-[30px]">
            투어코스 : 로마출발 → 폼페이 → 소렌토전망대 → 포지타노 → 로마도착<br />여행일정 : 원데이 - 투어날짜는 자세히보기를 눌러 선택하세요.<br />금액 : 예약금 - 60,000원,
            현지지불금 - 40유로</div>
        <div
            className="left-[640px] top-[50px] absolute text-white text-[22px] font-semibold font-['Noto Sans'] leading-[30px]">
            이태리남부 환상투어</div>
        <div
            className="px-[30px] py-[13px] left-[640px] top-[230px] absolute bg-blue-700 border border-white justify-center items-center gap-[9px] inline-flex">
            <div className="text-white text-lg font-semibold font-['Noto Sans'] leading-normal">자세히보기</div>
        </div>
    </div>
</div>

</>

    )
}
