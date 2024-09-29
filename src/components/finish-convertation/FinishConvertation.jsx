import './FinishConvertation.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const FinishConvertation = () => {
  const navigate = useNavigate();

  const navigateToExecuteScenario = () => {
    navigate('/execute-scenario');
  };

  return (
    <div className='finish-convertation'>
      <h1>Convertation successful!</h1>
      <Button
        onClick={navigateToExecuteScenario}
        variant={'outlined'}
        color={'primary'}
        size={'extraLarge'}
      >
        Execute scenario
      </Button>
      <div className='links'>
        <Link to='/create-scenario'>Create New Scenario</Link>
        <Link to='/select-scenario'>Select from Existing</Link>
      </div>
    </div>
  );
};

export default FinishConvertation;
