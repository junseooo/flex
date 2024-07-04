export function Section3() {
  return (
    <section className="block pt-20 bg-section-3">
      <div>
        <div className="flex flex-col flex-nowrap justify-start items-center gap-60px">
          <div className="flex flex-col flex-nowrap justify-start items-center gap-3">
            <div className="flex flex-col flex-nowrap justify-start items-center gap-20.5px">
              <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                <div>image</div>
                <span className="text-17px font-bold text-section-3-title">
                  고객 사례
                </span>
              </div>
              <span className="text-28px font-extrabold text-section-3-content">
                고객에게 물었습니다.
                <br />왜 flex를 선택했나요?
              </span>
            </div>
            <a
              href="/"
              className="flex flex-row flex-nowrap justify-start items-center"
            >
              <span className="text-15px font-bold text-section-3-link">
                모든 고객 사례 보기
              </span>
              <div>image</div>
            </a>
          </div>
          <div>ul images</div>
        </div>
      </div>
    </section>
  );
}
