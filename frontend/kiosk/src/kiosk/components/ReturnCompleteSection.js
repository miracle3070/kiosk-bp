/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const KioskReturnSectionCompleteStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid black;

  height: 60vh;
  p {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
  button {
    width: 450px;
    height: 50px;
  }
`

// 위에는 Emotion.js 입니다.
// 밑에는 JS 입니다.

const ReturnCompleteSection = () => {
  return (
    <div css={KioskReturnSectionCompleteStyle}>
       <p>6번 케이스에 넣어주세요. 감사합니다!</p>
       <button>홈으로 가기</button>
    </div>
  )
}

export default ReturnCompleteSection