import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  place-self: center; // Box 안에서 가운데 정렬
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.5,        // 0.5s
      delayChildren: 0.5,   // 자식요소의 delay(자식요소 시작 타이밍)
      staggerChildren: 0.2, // 자식요소 '간' delay
    },
  },
};

// in 'Motion': x,y 좌표 설정 가능
const circleVariants = {
  start: {
    opacity: 0,
    y: 10 // from: 아래에서
  },
  end: {
    opacity: 1,
    y: 0  // to: 위쪽으로 등장
  },
};

// ✨부모의 variants는 자식 요소에 상속됨
// Circle은 Box의 initial, animate 값을 상속받으므로
// 사용자 정의 variants의 property 이름(start, end)이 같을 경우,
// Circle에서 별도 prop(initial, animate)으로 주지 않아도 됨

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial='start' animate='end'>
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
