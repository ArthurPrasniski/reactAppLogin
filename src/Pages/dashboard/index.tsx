import * as s from "./styles";
import Lottie from 'react-lottie'
import animation from '../../animations/happy-2022-year.json'

export const Dashboard = () => {
  const lottie = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <s.Container>
      <Lottie options={lottie} />
      <a href="/">Voltar para a home</a>
    </s.Container>
  )
}