import React, { useRef, useState } from "react";
import "./ConsultForm.scss";
import emailjs from "@emailjs/browser";

const ConsultForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  // const oninputPhone = (target) => {
  //   target.value = target.value
  //     .replace(/[^0-9]/g, "")
  //     .replace(
  //       /(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g,
  //       "$1-$2-$3"
  //     );
  // };

  /** send Email */
  const serviceID = process.env.REACT_APP_EmailJs_ServiceID;
  const templateID = process.env.REACT_APP_EmailJs_TemplateID;
  const publicKey = process.env.REACT_APP_EmailJs_API_PublicKey;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        alert("성공적으로 이메일이 전송되었습니다.");
        setIsSending(false);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
        alert("이메일이 전송이 실패되었습니다.");
      }
    );
  };

  return (
    <div className="bg-form">
      <div className="blur">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="">
            <div className="input-head">
              <div className="none require"></div>
              <h4>성함 (업체명) : </h4>
            </div>
            <input
              type="text"
              placeholder="이름 또는 업체명을 입력해주세요."
              name="user_name"
            />
          </label>
          <label htmlFor="">
            <div className="input-head">
              <div className="none require"></div>
              <h4>연락처 : </h4>
            </div>
            <input
              name="user_tel"
              type="tel"
              placeholder="010-1234-1234형식으로 입력해주세요."
            />
          </label>
          <label htmlFor="">
            <div className="input-head">
              <div className="none"></div>
              <h4>메일 : </h4>
            </div>
            <input type="email" name="user_email" />
          </label>
          <label>
            <div className="input-head">
              <div className="none"></div>
              <h4>현장 위치 : </h4>
            </div>
            <input type="text" name="user_location" />
          </label>
          {/* <label htmlFor="">
            <div className="input-head">
              <div className="none"></div>
              <h4>문의사항 : </h4>
            </div>
            <input type="text" />
          </label> */}
          <label className="text-feild">
            <div className="input-head">
              <div className="none"></div>
              <h4>문의사항 : </h4>
            </div>
            <textarea name="user_text" id=""></textarea>
          </label>
          <button
            type="submit"
            disabled={isSending}
            className="btn submit_button"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultForm;
