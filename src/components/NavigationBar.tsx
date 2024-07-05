export default function NavigationBar() {
  return (
    <header className="block transition-none z-10 fixed top-0 w-full">
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
      <nav className="flex flex-row items-center justify-between h-60px pl-6 pr-15px bg-white">
        <div>
          <a href="/">
            <svg
              width="74"
              height="22"
              viewBox="0 0 80 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.26117 1.27805e-06C6.88377 0.000429017 7.50509 0.095524 8.10423 0.280598H8.10295C9.6974 0.775266 11.0032 1.86183 11.7823 3.33858C11.8075 3.38493 11.8311 3.43575 11.8539 3.48487L11.8616 3.50148L11.8714 3.52238C10.9605 4.44903 10.2761 5.59401 9.89015 6.83964C9.62406 7.69848 9.50423 8.60082 9.5328 9.52108C9.49272 9.5198 9.45092 9.5198 9.40913 9.5198C8.19293 9.51894 6.9665 9.79911 5.86117 10.3296C5.03388 10.7253 4.27909 11.2588 3.61683 11.9172C2.36779 11.3394 1.36737 10.3893 0.723024 9.16415C-0.0560776 7.68569 -0.210448 5.99358 0.283793 4.40084C0.685071 3.10276 1.4808 1.9936 2.58357 1.19488C3.64881 0.423881 4.95457 -0.000850296 6.26117 1.27805e-06Z"
                fill="black"
              ></path>
              <path
                d="M48.1254 1.17142H44.3583V22.3573H48.1254V1.17142Z"
                fill="black"
              ></path>
              <path
                d="M38.4833 4.93857H41.8683V1.17142H38.4833C35.43 1.17142 33.0385 3.60254 33.0385 6.70573V8.41447H31.4577V11.7347H33.0385V22.3573H36.8057V11.7347H41.8688V8.41447H36.8057V6.70573C36.8057 5.69806 37.5268 4.93857 38.4833 4.93857Z"
                fill="black"
              ></path>
              <path
                d="M79.3066 8.394L74.2874 15.0746L79.759 22.3573H75.5548L75.5356 22.3317L72.2494 17.7807H72.1207L68.8153 22.3573H64.6111L70.0827 15.0746L65.0635 8.394H69.2678L69.287 8.41958L72.1224 12.3705H72.2473L75.1023 8.394H79.3066Z"
                fill="black"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60.8086 18.197C60.1395 19.1812 59.122 19.6686 57.6934 19.6686C55.644 19.6686 54.2487 18.5688 53.8534 16.6473H64.797L64.8273 16.4771C64.8849 16.1547 64.9105 15.8076 64.9105 15.3518C64.9105 11.0494 61.8086 7.92705 57.5348 7.92705C53.261 7.92705 50.1587 11.0725 50.1587 15.4063C50.1587 19.7402 53.3054 22.8583 57.6406 22.8583C60.9314 22.8583 63.4602 21.1714 64.5778 18.2298L64.5906 18.1965L60.8086 18.197ZM57.5079 11.029C59.3548 11.029 60.6857 12.0823 61.1719 13.8388H53.8461C54.3412 12.1326 55.7369 11.029 57.5079 11.029Z"
                fill="black"
              ></path>
              <path
                d="M15.3089 17.1317C13.9592 16.7138 12.7353 15.9483 11.7695 14.9189C10.8705 13.9607 10.2053 12.7842 9.84324 11.5117C9.68205 11.5006 9.54004 11.4946 9.40827 11.4946C8.47565 11.4942 7.56777 11.7006 6.71233 12.1091C5.20658 12.8298 4.07141 14.0942 3.51448 15.669C2.95883 17.2439 3.04966 18.9415 3.77034 20.4477C4.4923 21.9551 5.75669 23.0903 7.32854 23.6447C10.5793 24.788 14.1554 23.0814 15.3042 19.8302C15.5993 18.9961 15.7085 18.1176 15.6309 17.2208C15.5362 17.197 15.4309 17.1692 15.3264 17.1373L15.3089 17.1317Z"
                fill="black"
              ></path>
              <path
                d="M17.7541 3.02344C18.3784 3.02387 18.9997 3.11896 19.5972 3.30404C21.1929 3.79998 22.5003 4.88484 23.2765 6.3633C24.0543 7.83878 24.2116 9.53088 23.7187 11.1266C23.2227 12.7194 22.1349 14.0255 20.6581 14.8046C19.1797 15.585 17.485 15.7428 15.8953 15.2469C14.3038 14.7526 12.998 13.666 12.2189 12.1863C11.4398 10.7078 11.2838 9.01702 11.7754 7.42428C12.1793 6.1245 12.975 5.01704 14.0765 4.21832C15.1417 3.44732 16.4475 3.02259 17.7541 3.02344Z"
                fill="black"
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <button type="button">
            <div className="flex w-22px">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6775_2588)">
                  <path
                    d="M3.5 21H24.5V18.6667H3.5V21ZM3.5 15.1667H24.5V12.8333H3.5V15.1667ZM3.5 7V9.33333H24.5V7H3.5Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6775_2588">
                    <rect width="28" height="28" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
