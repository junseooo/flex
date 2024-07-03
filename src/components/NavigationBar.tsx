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
                연차 촉진 제도, 100% 확신 제도
              </span>
            </div>
            <div>image</div>
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
