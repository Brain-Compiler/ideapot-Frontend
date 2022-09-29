import React from "react";
import styles from './member_management.module.scss'
import Register from '../../assets/register.png'
import Login from '../../assets/login.png'
import Id from '../../assets/id.png'
import Password from '../../assets/password.png'
import { Link } from "react-router-dom";

const MemberManagement = () => {
  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <p>IdeaPot</p>
        </div>
        <div className={styles.linkBox}>
          <Link className={styles.link} to='/register'>
            <img alt="register" src={Register} />
            <p>회원가입</p>
          </Link>
          <Link className={styles.link} to='/login'>
            <img alt="login" src={Login} />
            <p>로그인</p>
          </Link>
          <Link className={styles.link} to='/'>
            <img alt="id" src={Id} />
            <p>아이디 찾기</p>
          </Link>
          <Link className={styles.link} to='/'>
            <img alt="password" src={Password} />
            <p>비밀번호 찾기</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MemberManagement