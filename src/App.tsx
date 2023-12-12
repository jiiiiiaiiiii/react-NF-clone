import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    // const value = e.currentTarget.value; // 아래와 같은 코드
    const { currentTarget: {value} } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello', value);
    
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type='text'
          placeholder='username'
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
