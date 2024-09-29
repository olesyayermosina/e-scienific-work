import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Greeting from './components/greeting/Greeting.jsx';
import OntologyMerging from './components/ontologyMerging/OntologyMerging.jsx';
import CreateScenario from './components/create-scenario/CreateScenario.jsx';
import SelectScenario from './components/select-scenario/SelectScenario.jsx';
import FinishConvertation from './components/finish-convertation/FinishConvertation.jsx';
import SelectOwl from './components/select-owl/SelectOwl.jsx';
import ScenarioResult from './components/scenario-result/ScenarioResult.jsx';
import ScenarioInconsistencies from './components/scenario-inconsistencies/ScenarioInconsistencies.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Greeting />} />
        <Route path='/otolology-merging' element={<OntologyMerging />} />
        <Route path='/create-scenario' element={<CreateScenario />} />
        <Route path='/select-scenario' element={<SelectScenario />} />
        <Route path='/scenario-converted' element={<FinishConvertation />} />
        <Route path='/execute-scenario' element={<SelectOwl />} />
        <Route path='/scenario-finished' element={<ScenarioResult />} />
        <Route
          path='/scenario-problems'
          element={<ScenarioInconsistencies />}
        />
      </Routes>
    </>
  );
}

export default App;
