import ContainerDaysLeft from './components/ContainerDaysLeft'
import Counter from './components/Counter'
import Fireworks from './components/Fireworks'
import './styles/components/app.sass'

import useCountdown from './hooks/useCountdown';
function App() {
  const [day,hour,minute,second] = useCountdown("Jan 19, 2024 08:00:00");
  return (
    <>
      <div id='principal'>
        <h2 id="title"><Fireworks/> Trip to BSB</h2>
        <ContainerDaysLeft dias={day} />
        <Counter title="hours" number={hour}/>
        <Counter title="minutes" number={minute}/>
        <Counter title="seconds" number={second}/>
      </div>
      
    </>
    
  );
}

export default App;
