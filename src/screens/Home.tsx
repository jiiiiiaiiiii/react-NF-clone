import React from 'react';
import { users } from '../db';
import { Link, useSearchParams } from 'react-router-dom';

function Home() {

// useSearchParams: search 파라미터를 수정할 수 있게 도움 -> filter, pagination
// -> URLSearchParams: utility method 제공
  const [readSearchParams, setSearchParams] = useSearchParams();

  setTimeout(() => {
    setSearchParams({
      day: 'today',
      tomorrow: '123'
    })
  }, 3000) // 3초 후 url 변경 -> http://localhost:3000/?day=today&tomorrow=123
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
						<Link to={`/users/${user.id}`}>{user.name}</Link>
					</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
