import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">메인으로 돌아가기</Link>
    </div>
  )
}

export default Error;