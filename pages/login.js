import ky from 'ky/umd';
import React, { useRef, useState } from 'react';

const LoginForm = ({ onAuthorized, onError }) => {
  const loginRef = useRef();
  const passRef = useRef();

  const doLogin = async e => {
    const login = loginRef.current.value;
    const password = passRef.current.value;

    try {
      const loginResult = await ky
        .post('/api/login', { json: { login, password } })
        .json();

      onAuthorized(loginResult);
    } catch (e) {
      onError(e);
    }
  };

  return (
    <div>
      <div>
        <input id="login" type="text" placeholder="Login" ref={loginRef} />
      </div>
      <div>
        <input id="pass" type="password" placeholder="Password" ref={passRef} />
      </div>
      <div>
        <button id="dologin" onClick={doLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

function LoginPage() {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  return (
    <div>
      {!user && (
        <LoginForm
          onAuthorized={newUser => setUser(newUser)}
          onError={newError => setError(newError)}
        />
      )}
      {user && (
        <div>
          <h1>Hello {user.login}!</h1>
        </div>
      )}
      {error && <div style={{ color: 'red' }}>{error.toString()}</div>}
    </div>
  );
}

export default LoginPage;
