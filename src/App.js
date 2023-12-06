import styled, {keyframes} from 'styled-components';

function App() {

  const rotateAnimation = keyframes`
    0% {
      transform: rotate(0deg);
      border-radius: 0px;
    } 
    50% {
      transform: rotate(360deg);
      border-radius: 100px;
    }
    100% {
      transform: rotate(0deg);
      border-radius: 0px;
    }
  `;

  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
  `;

  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
