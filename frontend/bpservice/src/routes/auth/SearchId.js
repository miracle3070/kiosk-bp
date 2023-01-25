/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import CertificationNumInput from "../../components/userFindId/CertificationNumInput";
import FindEmailComponent from "../../components/userFindId/FindEmailComponent";
import FindNameComponent from "../../components/userFindId/FindNameComponent";
import { findIdInfo } from "../../modules/findId";

const searchIdArea = css`
  width: 100%;
  height: 72vh;
  border: 1px black solid;
`;

const searchModalPosition = css`
  height: 72vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const searchModal = css`
  width: 35vh;
  height: 45vh;
  border: 1px black solid;
`;

const title = css`
  text-align: center;
`;

function SeachId({ setFindIdInfo }) {
  const [info, setInfo] = useState({});

  const findIdFnc = () => {
    if (info.email && info.userName) {
      setFindIdInfo({ email: info.email, userName: info.userName });
    } else {
      alert("아이디와 이름을 입력해주세요.");
    }
  };
  return (
    <div>
      <header>
        <Nav />
      </header>

      <div css={searchIdArea}>
        <div css={searchModalPosition}>
          <div css={searchModal}>
            <div css={title}>
              <h1>아이디 찾기</h1>

              {/* 이메일 */}
              <FindEmailComponent setInfo={setInfo} />

              {/* 이름 */}
              <FindNameComponent setInfo={setInfo} />

              {/* 아이디 찾기 버튼 */}
              <div>
                <button onClick={findIdFnc}>아이디 찾기</button>
              </div>

              {/* 인증번호 입력 */}
              <CertificationNumInput info={info} setInfo={setInfo} />
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFindIdInfo(info) {
      dispatch(findIdInfo.setFindIdInfo(info));
    },
  };
};

export default connect(null, mapDispatchToProps)(SeachId);
