import './SelectOwl.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import { tryToExecute } from '../../api/execute.js';
import { useError } from '../../hooks/error.jsx';

const mockedScenarios = [
  { id: 0, name: 'Scenario1' },
  { id: 1, name: 'Scenario2' },
  { id: 2, name: 'Scenario3' },
];

const mockedErrors = [
  {
    id: 0,
    message: '1 Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 1,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 2,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 3,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 4,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 5,
    message: '2 Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 6,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 7,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 8,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 9,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 10,
    message: '3 Concept “Cakes” does not exist in the subject area ontology',
  },
  {
    id: 11,
    message: 'Concept “Cakes” does not exist in the subject area ontology',
  },
];

const mockedResult = [
  { headers: ['Title', 'Type', 'Pages', 'Date'] },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
  { Title: 'Title 1', Type: 'Article', Pages: 15, Date: '01.01.2024' },
];

const SelectOwl = () => {
  const navigate = useNavigate();
  const { showError, ErrorSnackbar } = useError();
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState('');
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const fetchOwlScenarios = async () => {
      try {
        /*const response = await fetchScenariosOwl();
                setScenarios(response.data);
                setSelectedScenario(scenarios[0].id);*/
        setScenarios(mockedScenarios);
        setSelectedScenario(mockedScenarios[0].id);
      } catch (error) {
        showError(error.message);
        console.error('Error fetching scenarios OWL:', error);
      }
    };

    fetchOwlScenarios();
  }, []);

  const handleScenarioSelect = (event) => {
    const selectedId = event.target.value;
    const selectedScenario = scenarios.find(
      (scenario) => scenario.id === selectedId,
    );
    setSelectedScenario(selectedScenario.id);
  };

  const tryToExecuteScenario = async () => {
    setShowProgress(() => true);
    try {
      const data = {
        scenario: selectedScenario,
      };
      //const response = await tryToExecute(data);
      //const result = await response.json();
      setShowProgress(() => false);
      const result = { message: 'successful', data: mockedResult };

      if (result.message === 'successful') {
        navigate('/scenario-finished', { state: { data: result.data } });
      } else if (result.message === 'not successful') {
        navigate('/scenario-problems', { state: { data: result.data } });
      }
    } catch (error) {
      setShowProgress(() => false);
      showError(error.message);
      console.error('Error executing OWL:', error);
    }
  };

  return (
    <div className='select-owl'>
      <h1>Select scenario to execute</h1>
      <Box>
        <FormControl fullWidth>
          <Select
            sx={{ fontSize: '14px', mb: 3 }}
            value={selectedScenario}
            onChange={handleScenarioSelect}
          >
            {scenarios.map((scenario) => (
              <MenuItem
                sx={{ fontSize: '14px' }}
                key={scenario.id}
                value={scenario.id}
              >
                {scenario.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {!showProgress && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant='outlined'
            color='primary'
            size={'extraLarge'}
            onClick={tryToExecuteScenario}
          >
            Execute Scenario
          </Button>
        </Box>
      )}
      {showProgress && (
        <div className='progress'>
          <CircularProgress color='primary' size={50} />
        </div>
      )}
      <ErrorSnackbar />
    </div>
  );
};

export default SelectOwl;
