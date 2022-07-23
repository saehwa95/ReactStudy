import React, { useState } from 'react';
import './App.css';

const ERROR_MESSAGE_BY_NAME = {
  입력한_패스워드가_서로_다름: '패스워드와 패스워드 확인 값이 서로 다릅니다.',
  이메일이_입력되지_않음: '이메일을 입력해 주세요.',
  암호가_입력되지_않음: '암호를 입력해 주세요.',
  암호확인이_입력되지_않음: '암호 확인 필드를 입력해 주세요.',
  이메일_형식에_맞지_않음: '입력된 이메일이 형식에 맞지 않습니다.'
};

const emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * 다음주 월요일까지 할일
 * - UI 업데이트 (오픈소스를 써도 상관 없으나 선정한 이유가 필요함.)
 * - 에러 관련 처리 2가지 정도를 더 추가해 볼것 (Ex: 패스워드 길이가 최소 6자 이상인 경우)
 * - 가입 성공시에 google.com 으로 이동 
 * 
 * - 로그인 페이지 작성
 * - https://react-hook-form.com/ 을 사용해 폼 컨트롤 구현하기
 * - 오픈소스 사용 안하고 디자인 직접 구현, SCSS 사용할 것.
 * - https://ohou.se/users/sign_in?redirect_to=%2Fstore 디자인 참고할 것.
 * - 에러 메시지를 보여주는 UI는 세화님이 생각해서 적절한 위치에 만들 것. +디자인 포함
 */

const App = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    let currentErrorName = '';
    if (values.email.length === 0) currentErrorName = '이메일이_입력되지_않음';
    else if (!values.email.match(emailValidRegex)) currentErrorName = '이메일_형식에_맞지_않음';
    else if (values.password.length === 0) currentErrorName = '암호가_입력되지_않음';
    else if (values.confirmPassword.length === 0) currentErrorName = '암호확인이_입력되지_않음';
    else if (values.password !== values.confirmPassword) currentErrorName = '입력한_패스워드가_서로_다름';

    if (currentErrorName.length > 0) {
      setErrors(ERROR_MESSAGE_BY_NAME[currentErrorName]);
      return;
    }

    // 성공했을때 동작
    console.log(values);
  };

  const onChange = evt => {
    const { name, value } = evt.target;
    const nextValues = { ...values, [name]: value };
    setErrors(null);
    setValues(nextValues);
  };

  return (
    <>
      <div className='container'>
        <h1>회원가입</h1>
        {errors && <div className='error-message-box'>{errors}</div>}
        <form onSubmit={onSubmit}>
          <input name='email' type='text' placeholder='Email' value={values.email} onChange={onChange} />
          <input name='password' type='password' placeholder='Password' value={values.password} onChange={onChange} />
          <input name='confirmPassword' type='password' placeholder='Confirm Password' value={values.confirmPassword} onChange={onChange} />
          <button type='submit' disabled={errors}>
            회원가입
          </button>
        </form>
      </div>
    </>
  );
};



export default App;

