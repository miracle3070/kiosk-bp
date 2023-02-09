/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import KioskHeader from "../components/KioskHeader";
import KioskReturnGuideSection from "../components/KioskReturnGuideSection";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import sample from '../../sample.json';
import KioskTTSBtn from '../components/button/KioskTTSBtn';

const KioskReturnGuideContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #EEF1FF;
  footer {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`

const KioskReturnGuideContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 홈화면으로
  const miliUnit = 1000
  const seconds = 180 * miliUnit
  useEffect(() => {
    let myTimer = setTimeout(() => {
      navigate(`/kiosk/${id}`)
    }, seconds)
    return () => {
      clearTimeout(myTimer)
    }
  }, [id, seconds, navigate])

  let TTSMent = sample.returncomplete

  return (
    <div css={KioskReturnGuideContainerStyle}>
      <div>
        <KioskHeader />
      </div>
      <div>
        <KioskReturnGuideSection />
      </div>
      <footer>
        <KioskTTSBtn data={TTSMent} />
      </footer>
    </div>
  )
}

export default KioskReturnGuideContainer;