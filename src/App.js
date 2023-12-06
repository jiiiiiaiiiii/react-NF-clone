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

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Emoji = styled.span`
  font-size: 36px;
  `;

  const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotateAnimation} 1s linear infinite;
    ${Emoji}:hover {font-size: 98px;}
  `;

  return (
    <Wrapper>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
