import React, { useRef, useState } from 'react';

const LoginForm = ({ onAuthorized }) => {
  const loginRef = useRef();
  const passRef = useRef();

  const doLogin = async e => {
    const login = loginRef.current.value;
    const password = passRef.current.value;

    const loginResult = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    }).then(r => r.json());

    onAuthorized(loginResult);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Login"
          defaultValue="yamalight"
          ref={loginRef}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          defaultValue="123"
          ref={passRef}
        />
      </div>
      <div>
        <button onClick={doLogin}>Login</button>
      </div>
    </div>
  );
};

function LoginPage() {
  const [user, setUser] = useState();

  return (
    <div>
      {!user && <LoginForm onAuthorized={newUser => setUser(newUser)} />}
      {user && (
        <div>
          <h1>Hello {user.login}!</h1>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
