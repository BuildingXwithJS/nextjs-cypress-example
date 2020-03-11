const validCredentials = {
  login: 'yamalight',
  password: '123'
};

export default ({ body: { login, password } }, res) => {
  if (
    validCredentials.login === login &&
    validCredentials.password === password
  ) {
    res.status(200).json(validCredentials);
    return;
  }

  res.status(401).json({ error: 'Not authorized' });
};
