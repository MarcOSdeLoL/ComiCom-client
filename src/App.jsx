import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/basicComponents/Navigation/Navigation'
import Footer from './components/basicComponents/Footer/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (

    <div className="App">

      <Navigation />
      
      <AppRoutes />
      
      <Footer />

    </div>
  )
}

export default App
