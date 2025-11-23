import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
