import { useState } from "react"
import document from '../../assets/document.png'
import styles from './login.module.scss'
import { Link } from "react-router-dom"
import axios from "axios"
import qs from 'qs'

const Login = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async () => {
    const data = qs.stringify({
      username: id,
      password: password,
    })

    await axios.post('http://localhost:8080/api/login', data)
    .then(res => console.log(res.data))
  }

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1><img className={styles.documentImage} alt='document' src={document} />IdeaPot</h1>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.idInput}>
            <p>아이디</p>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
          </div>
          <div className={styles.passwordInput}>
            <p>비밀번호</p>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
        <div className={styles.bottom}>
          <input type='button' value='로그인' onClick={loginHandler}/>
          <Link to="/register"><p>회원가입</p></Link>
          <Link to="/searchId"><p>아이디 찾기</p></Link>
          <Link to="/resetPw"><p>비밀번호 찾기</p></Link>
        </div>
      </div>
      <div className={styles.login}>
        <p>Login</p>
      </div>
    </div>
  )
}

export default Login