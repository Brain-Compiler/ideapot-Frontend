import { useState } from "react"
import styles from './register.module.scss'
import document from '../../assets/document.png'
import checkMark from '../../assets/check_mark_white.png'
import arrow from '../../assets/arrow_left_white.png'
import profile from '../../assets/userIcon.png'
import plane from '../../assets/paper_plane_white.png'
import { Link } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [page, setPage] = useState(1)
  const [personalData, setPersonalData] = useState(false)
  const [terms, setTerms] = useState(false)

  const checkInput = () => {
    if (name === '') {
      alert('이름을 입력해주세요');
    } else if (id === '') {
      alert('아이디를 입력해주세요');
    } else if (password === '') {
      alert('비밀번호를 확인해주세요');
    } else if (passwordCheck !== password) {
      alert('비밀번호를 확인해주세요');
    } else {
      setPage(2)
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1><img className={styles.documentImage} alt='document' src={document} />IdeaPot</h1>
        </div>
        { page === 1 ? (
          <div className={styles.inputBox}>
            <div className={styles.nameInput}>
              <p>이름</p>
              <input type='text' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className={styles.idInput}>
              <p>아이디</p>
              <input type='text' value={id} onChange={e => setId(e.target.value)} /> <label htmlFor="idCheck"><img className={styles.checkMarkImage} alt='checkMark' src={checkMark} /></label>
              <input type='button' id='idCheck' className={styles.checkButton} />
            </div>
            <div className={styles.passwordInput}>
              <p>비밀번호</p>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className={styles.checkPasswordInput}>
              <p>비밀번호 확인</p>
              <input type='password' value={passwordCheck} onChange={e => setPasswordCheck(e.target.value)} />
            </div>
          </div>
        ) : (
          <div className={styles.box}>
            <div className={styles.back} onClick={() => setPage(1)}>
              <img alt="arrow" src={arrow} />
            </div>
            <div className={styles.profile}>
              <p>프로필</p>
              <img alt="profile" src={profile} />
            </div>
            <div className={styles.emailInput}>
              <p>이메일</p>
              <input type='text' value={email} onChange={e => setEmail(e.target.value)} /> <label htmlFor="send"><img className={styles.planeImage} alt='plane' src={plane} /></label>
              <input type='button' id='send' className={styles.sendButton} />
            </div>
            <div className={styles.codeInput}>
              <p>인증코드</p>
              <input type='text' value={code} onChange={e => setCode(e.target.value)} /> <label htmlFor="codeCheck"><img className={styles.checkImage} alt='checkMark' src={checkMark} /></label>
              <input type='button' id='codeCheck' className={styles.checkButton} />
            </div>
            <div className={styles.checkBox} >
              <div className={styles.personalData}>
                <p>개인정보 이용 동의</p>
                <input type='checkbox' value={personalData} onChange={e => setPersonalData(e.target.value)} />
              </div>
              <div className={styles.terms}>
                <p>이용약관</p>
                <input type="checkbox" value={terms} onChange={e => setTerms(e.target.value)} />
              </div>
            </div>
          </div>
        )}
        <div className={styles.bottom}>
          { page === 1 ? (
            <input type='button' value='다음' onClick={checkInput}/>
          ) : (
            <input type='button' value='가입' />
          )}
          <Link to="/login"><p>로그인</p></Link>
        </div>
      </div>
      <div className={styles.sign_up}>
        <p>Sign Up</p>
      </div>
    </div>
  )
}

export default Register