import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welcome to Bioh</h1>
        <button>
                <Link to="/login">Login</Link>
        </button>
        <button>
                <Link to="/signup">Sign Up!</Link>
        </button>
    </div>

  )
}

export default Home