import Calendar from './components/Calendar'
import './assets/css/style.css'

const now = new Date()
function App() {
  return <Calendar date={now} />
}

export default App
