import ContainerDaysLeft from './components/ContainerDaysLeft'
import Counter from './components/Counter'
import './styles/components/app.sass'

import useCountdown from './hooks/useCountdown';
function App() {
  const [day,hour,minute,second] = useCountdown("Jul 28, 2023 08:30:00");
  return (
    <div id='principal'>
      <h2>Trip to Brasilia </h2>
      <ContainerDaysLeft dias={day} />
      <Counter title="horas" number={hour}/>
      <Counter title="minutos" number={minute}/>
      <Counter title="segundos" number={second}/>

    </div>
  );
}

export default App;
