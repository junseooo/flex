import React from "react";
import Button from "./components/Button";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <section className="block pb-87px bg-section-1">
        <div className="flex flex-col flex-nowrap justify-start items-center gap-114px pt-60px">
          <div className="flex flex-col flex-nowrap justify-start items-center gap-30px">
            <div className="flex flex-col flex-nowrap justify-start items-center gap-3">
              <div>
                <span className="font-extrabold text-40px text-gradient">
                  <span className="font-extrabold text-44px mr-1">flex</span>는
                  팀이다
                </span>
              </div>
              <span className="font-semibold text-15px">
                팀 성장을 만드는 단 하나의 HR
              </span>
            </div>
            <div className="flex flex-col flex-nowrap justify-start items-center gap-2.5">
              <Button
                text="지금 무료로 시작하기"
                backgroundColor="bg-button-gradient"
                textColor="text-white"
              />
              <Button
                text="도입 문의"
                backgroundColor="white"
                textColor="text-section-1-button"
              />
            </div>
          </div>
          <div>images</div>
        </div>
      </section>
      <section className="block pt-100px pb-75px">
        <div className="flex flex-col flex-nowrap justify-start items-center gap-60px">
          <div className="flex flex-col flex-nowrap justify-start items-center gap-5">
            <span className="text-3xl text-center font-extrabold">
              이제 HR이 달라지고 있습니다.
            </span>
            <span className="text-15px text-center font-semibold">
              flex를 경험한 60,000+의 회사가 그 증거입니다.
            </span>
          </div>
          <div>ul li images</div>
        </div>
      </section>
      <section className="block pt-20 bg-section-2">
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
    </div>
  );
}

export default App;
