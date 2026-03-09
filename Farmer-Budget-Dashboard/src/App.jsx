import { NavigationPanel} from './Sections/NavigationPanel'
import { MainArea } from './Sections/MainArea'
import './App.css'

function App() {

  return (
    <div className='dashboard-layout'>
      <NavigationPanel />
      <MainArea />
    </div>
  )
}

export default App
