import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return window.alert("비밀번호가 일치하지 않습니다.")
    }
    console.log({
      id,
      password,
      confirmPassword
    });
  }

  const onChangeId = (event) => {
    setId(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  return (
    <>
      <div className='container'>
        <h1>회원가입</h1>
        <form onSubmit={onSubmit}>
          <input
            name="id"
            type="text"
            placeholder="Id"
            required
            value={id}
            onChange={onChangeId}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChangePassword}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
          <button>회원가입</button>
        </form>
      </div>
    </>
  )
}

export default App
