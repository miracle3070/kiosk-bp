/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import KioskCameraHeader from '../components/KioskCameraHeader';
import KioskReturnCameraSection from '../components/KioskReturnCameraSection';

const KioskReturnCameraStyle = css`
  box-sizing: border-box;
  border : 1px solid black;

  width : 100vw;
  height : 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const header = css`
  width: 100vw;
  height: 10vh !important;
  z-index: 6;

  position: fixed;
  top:0px;
`

const section = css`
  height: 90vh !important;
`

// 위에는 Emotion.js 입니다.
// 밑에는 JS 입니다.

const KioskReturnCameraContainer = () => {
  const { id } = useParams();

  // 데이터 수령
  const location = useLocation();
  const navigate = useNavigate();
  
  // 홈화면으로
  const miliUnit = 1000
  const seconds = 6000 * miliUnit
  useEffect(() => {
    let myTimer = setTimeout(() => {
      navigate(`/kiosk/${id}`)
    }, seconds)
    return () => {
      clearTimeout(myTimer)
    }
  }, [id, seconds, miliUnit, navigate])

  return (
    <div css={KioskReturnCameraStyle}>
      <div css={header}>
        <KioskCameraHeader/>
      </div>
      <div css={section}>
        <KioskReturnCameraSection data={location.state}/>
      </div>
    </div>
  )
}

export default KioskReturnCameraContainer;