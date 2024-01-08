import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; // Box가 BiggerBox 밖으로 이동할 경우 숨김
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: '100px' },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin  // 마우스를 놓으면 제자리로
          dragElastic={1}  // 당기는 힘, 0 ~ 1(마우스와 요소의 위치가 일치), defalut = 0.5
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover' // hover 중
          whileTap='click' // 클릭 중
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
