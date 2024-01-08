import styled from 'styled-components';
import { motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  // useTransform(추척값, [input Array], [output Array])
  // input과 output은 같은 배열 크기를 가져야 함
  // ex: x가 800이면 2를 return
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  
  // useMotionValueEvent(x, 'change', (xValue) => {
  //   console.log(xValue);
  // });

  useMotionValueEvent(scale, 'change', (xValue) => {
    console.log(xValue);
  });

  return (
    <Wrapper>
      <Box style={{ x, scale }}  drag='x' dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
