import styled from 'styled-components';

function App() {
  const Father = styled.div`
    display: flex;
  `;

  const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  `;

  const Input = styled.input.attrs({required: true, minLength: 10})`
    background-color: tomato;
  `;

  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as='a' href='/'>Log in</Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
