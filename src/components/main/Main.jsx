
import { useLocation } from 'react-router-dom';

// my components
import Card from '../card/Card';
import CardM from '../card/CardM';

// styles
import './style.main.css';

const Main = () => {

  let location = useLocation();

  return (
      <main className='page' style={location.pathname === "/" ? {marginTop : "120px"} : {}}>
        <Card />
        <Card />
        <CardM />
        <Card />
      </main>
  )
}

export default Main
