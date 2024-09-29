import './Greeting.scss';
import { Button } from '@mui/material';
import background from '../../assets/4672550_2476842 1.svg';
import { useNavigate } from 'react-router-dom';

const Greeting = () => {
  const navigate = useNavigate();

  const navigateToNewScenario = () => {
    navigate('/create-scenario');
  };

  const navigateToSelectScenario = () => {
    navigate('/select-scenario');
  };

  return (
    <div className='greeting'>
      <h1>Let`s get started!</h1>
      <div className={'buttons'}>
        <Button
          onClick={navigateToNewScenario}
          variant={'outlined'}
          color={'primary'}
          size={'extraLarge'}
        >
          Create new scenario
        </Button>
        <Button
          onClick={navigateToSelectScenario}
          variant={'outlined'}
          color={'secondary'}
          size={'extraLarge'}
        >
          Select from existing
        </Button>
      </div>
      <img src={background} alt={''} className={'background'} />
    </div>
  );
};

export default Greeting;
