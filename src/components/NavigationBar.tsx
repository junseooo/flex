export default function NavigationBar() {
  return (
    <header>
      <div>
        <a href="/">
          <div className="flex flex-row flex-nowrap justify-between items-center bg-banner h-55px px-4">
            <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
              <div className="block mr-2 rounded px-1.5 py-1 text-11px bg-banner-notice text-banner-notice font-bold">
                NOTICE
              </div>
              <span className="flex items-center text-banner-notice-content text-15px font-550">
                연차 촉진 제도, 100% 자동화하기
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="flex-shrink:0"
            >
              <path
                fill="#556372"
                d="M9.783 17.566 8.65 16.434 13.086 12 8.65 7.566l1.132-1.132L15.349 12l-5.566 5.566Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </a>
      </div>
      <nav className="flex flex-col">
        <ul>
          <a href="/">Home</a>
          <a href="/">Setting</a>
        </ul>
      </nav>
    </header>
  );
}
