import React from "react";
import styles from './member_management.module.scss'
import register from '../../assets/register.png'
import login from '../../assets/login.png'
import id from '../../assets/id.png'
import password from '../../assets/password.png'
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
            <img alt="register" src={register} />
            <p>회원가입</p>
          </Link>
          <Link className={styles.link} to='/login'>
            <img alt="login" src={login} />
            <p>로그인</p>
          </Link>
          <Link className={styles.link} to='/'>
            <img alt="id" src={id} />
            <p>아이디 찾기</p>
          </Link>
          <Link className={styles.link} to='/'>
            <img alt="password" src={password} />
            <p>비밀번호 찾기</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MemberManagement