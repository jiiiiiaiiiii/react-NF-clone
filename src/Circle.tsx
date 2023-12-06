import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; // property?: Optiooanl Props
  text?: string;
}

function Circle({ bgColor, borderColor, text = 'defalut text' }: CircleProps) {
  return (
    // borderColor={borderColor ?? default값}
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
