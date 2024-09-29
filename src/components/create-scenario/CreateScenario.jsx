import './CreateScenario.scss';
import BpmnDiagram from '../bpmn-diagram/BpmnDiagram.jsx';

const CreateScenario = () => {
  return (
    <div className='create-scenario'>
      <h1>Create New Scenario</h1>
      <div className='diagram'>
        <BpmnDiagram createNewMode={true} />
      </div>
    </div>
  );
};

export default CreateScenario;
