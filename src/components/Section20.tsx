export function Section20() {
  return (
    <div className="block">
      <section className="block pb-20 bg-section-20-background">
        <div className="flex flex-col flex-nowrap justify-center items-center gap-60px relative">
          <span className="font-bold text-28px section-20-text-gradient mt-20">
            아직 망설여지나요?
            <br />
            체험은 무료입니다.
          </span>
          <a
            href="/"
            className="inline-flex justify-center items-center h-14 text-white rounded-48px sticky opacity-100 px-18px bottom-50px min-w-220px bg-section-20-button-background font-bold shadow-section-20-button"
          >
            <div className="flex justify-center items-center flex-shrink-0 h-6 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="flex-shrink-0"
              >
                <path
                  fill="currentColor"
                  d="m3.5 4.1-.61 1.561 4.574 4.223L15 8l-5.703 4.825.808 7.275 1.644.4 10-15L21 4.1H3.5Z"
                ></path>
              </svg>
            </div>
            지금 무료로 시작하기
          </a>
        </div>
      </section>
    </div>
  );
}
