import React from "react";
import "./ConsultForm.scss";

const ConsultForm = () => {
  const oninputPhone = (target) => {
    target.value = target.value
      .replace(/[^0-9]/g, "")
      .replace(
        /(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g,
        "$1-$2-$3"
      );
  };
  return (
    <div className="bg-form">
      <div className="blur">
        <form action="">
          <label htmlFor="">
            <div className="input-head">
              <div className="none require"></div>
              <h4>성함 (업체명) : </h4>
            </div>
            <input type="text" placeholder="이름 또는 업체명을 입력해주세요." />
          </label>
          <label htmlFor="">
            <div className="input-head">
              <div className="none require"></div>
              <h4>연락처 : </h4>
            </div>
            <input
              type="tel"
              placeholder="010-1234-1234형식으로 입력해주세요."
            />
          </label>
          <label htmlFor="">
            <div className="input-head">
              <div className="none "></div>
              <h4>메일 : </h4>
            </div>
            <input type="email" />
          </label>
          <label htmlFor="">
            <div className="input-head">
              <div className="none"></div>
              <h4>현장 위치 : </h4>
            </div>
            <input type="text" />
          </label>
          {/* <label htmlFor="">
            <div className="input-head">
              <div className="none"></div>
              <h4>문의사항 : </h4>
            </div>
            <input type="text" />
          </label> */}
          <label htmlFor="" className="text-feild">
            <div className="input-head">
              <div className="none"></div>
              <h4>문의사항 : </h4>
            </div>
            <textarea name="" id=""></textarea>
          </label>
        </form>
      </div>
    </div>
  );
};

export default ConsultForm;
