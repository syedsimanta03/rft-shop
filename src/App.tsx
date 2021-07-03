import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes'
import './App.css'
import './fontawesome'
import Layout from './Layout';

function App() {
  return (
    <div className='App'>
      <Router>
      <Layout>
        <Routes />
      </Layout>
      </Router>
    </div>
  )
}


export default App
