import React, { useState } from "react"
import document from '../../assets/document.png'
import styles from './login.module.scss'
import { Link } from "react-router-dom"

const Login = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1><img className={styles.documentImage} alt='document' src={document} />IdeaPot</h1>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.idInput}>
            <p>아이디</p>
            <input type='text' onChange={e => setId(e.target.value)} />
          </div>
          <div className={styles.passwordInput}>
            <p>비밀번호</p>
            <input type='text' onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
        <div className={styles.bottom}>
          <input type='button' value='로그인' />
          <Link to="/register"><p>회원가입</p></Link>
          <Link to="/searchId"><p>아이디 찾기</p></Link>
          <Link to="/"><p>비밀번호 찾기</p></Link>
        </div>
      </div>
      <div className={styles.login}>
        <p>Login</p>
      </div>
    </div>
  )
}

export default Login