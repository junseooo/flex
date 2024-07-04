export function Section4() {
  return (
    <section className="block px-10 py-110px">
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="flex flex-col-reverse flex-nowrap justify-between items-start w-full max-w-1110px gap-30px">
          <div className="flex flex-col flex-nowrap justify-start items-stretch gap-34px">
            <span className="text-section-4-28px font-extrabold text-section-4-title">
              이런 고민을 하고 있다면,
              <br />
              flex를 시작하세요!
            </span>
            <span className="text-section-4-15px font-bold text-section-4-content tracking-section-4">
              근태, 급여, 연차, 계약이 법에 맞는지 불안하다.
              <br />
              의사결정을 위한 HR 데이터 수집이 원활하지 않다.
              <br />
              반복적인 HR 운영 업무에 리소스를 많이 빼앗긴다.
              <br />
              오래된 시스템으로 구성원이 불편함을 느낀다.
            </span>
          </div>
          <img
            className="h-100px"
            data-component="landing-image"
            src="https://static.flex.team/v2/landing/home/problem/img-thinking-face.png"
            srcSet="https://static.flex.team/v2/landing/home/problem/img-thinking-face.png 1x, https://static.flex.team/v2/landing/home/problem/img-thinking-face@2x.png 2x, https://static.flex.team/v2/landing/home/problem/img-thinking-face@3x.png 3x"
            alt="problem"
          />
        </div>
      </div>
    </section>
  );
}
