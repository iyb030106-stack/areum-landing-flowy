import React from 'react';

const ValueProps: React.FC = () => {
  return (
    <section className="w-full max-w-lg space-y-24 text-center mb-20 px-4">
      {/* Main Value Prop */}
      <div>
        <h2 className="text-[24px] sm:text-3xl font-bold text-gray-900 leading-[1.5] tracking-[-0.01em] break-keep">
          반복되는 설명, 누락되는 업무,<br />
          사람에 의존하는 운영은 이제 끝내세요.<br />
          <span className="block mt-4 text-gray-600">시스템이 대신 가르치고 관리합니다.</span>
        </h2>
      </div>

      {/* Integration Benefit */}
      <div>
        <p className="text-[24px] sm:text-3xl font-medium text-gray-400 leading-[1.5] tracking-[-0.01em] break-keep">
          바빠 죽겠는데<br />
          <span className="text-gray-900 font-bold">'사장님, 이거 어디 있어요?'</span><br />
          물어보는 카톡, 이제 끝내세요.
        </p>
      </div>

      {/* Simplicity Focus */}
      <div>
        <p className="text-[24px] sm:text-3xl font-semibold text-gray-800 leading-[1.5] tracking-[-0.01em] break-keep">
          가르치다 지쳐서<br />
          <span className="text-gray-500 italic">"그냥 내가 하고 만다..."</span><br />
          이 생각 해보셨다면 클릭하세요.
        </p>
      </div>
    </section>
  );
};

export default ValueProps;