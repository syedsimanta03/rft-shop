import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes'
import './App.css'
import './fontawesome'
import Layout from './Layout';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div className='App'>
      <Router>
      <Layout>
        <Routes />
      </Layout>
      </Router>
      <Signup/>
    </div>
  )
}


export default App
