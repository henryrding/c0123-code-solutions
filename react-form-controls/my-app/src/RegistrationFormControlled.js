import { useState } from "react";

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username<input type="text" name="username" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <label>
        Password<input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
