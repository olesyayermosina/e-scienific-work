import './FinishConvertation.scss';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { saveOwlScenario } from '../../api/convertation.js';
import { useError } from '../../hooks/error.jsx';

const FinishConvertation = () => {
  const location = useLocation();
  const { showError, ErrorSnackbar } = useError();

  const { data } = location.state;

  const saveScenarioToBaseSet = async () => {
    try {
      const response = await saveOwlScenario(data);
      await response.json();
    } catch (error) {
      showError(error.message);
      console.error(error);
    }
  };

  return (
    <div className='finish-convertation'>
      <h1>Convertation successful!</h1>
      <Button
        onClick={saveScenarioToBaseSet}
        variant={'outlined'}
        color={'primary'}
        size={'extraLarge'}
      >
        Save scenario
      </Button>
      <div className='links'>
        <Link to='/create-scenario'>Create New Scenario</Link>
        <Link to='/select-scenario'>Select from Existing</Link>
      </div>
      <ErrorSnackbar />
    </div>
  );
};

export default FinishConvertation;
