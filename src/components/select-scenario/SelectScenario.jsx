import { useEffect, useState } from 'react';
import {Select, MenuItem, FormControl, Box} from '@mui/material';
import BPMNDiagram from "../bpmn-diagram/BpmnDiagram.jsx";
import {mock1} from "../../res/mocks/mock1.js";
import {mock2} from "../../res/mocks/mock2.js";
import {mock3} from "../../res/mocks/mock3.js";
import './SelectScenario.scss';
import {fetchScenariosXML} from "../../api/convertation.js";
import {useError} from "../../hooks/error.jsx";

const mockedScenarios = [
    {id: 0, name: 'Scenario1', xml: mock1},
    {id: 1, name: 'Scenario2', xml: mock2},
    {id: 2, name: 'Scenario3', xml: mock3}
];

const SelectScenario = () => {
    const { showError, ErrorSnackbar } = useError();
    const [scenarios, setScenarios] = useState([]);
    const [selectedScenario, setSelectedScenario] = useState('');
    const [xmlData, setXmlData] = useState('');

    useEffect(() => {
        const fetchScenarios = async () => {
            try {
                /*const response = await fetchScenariosXML();
                setScenarios(response.data);
                setSelectedScenario(scenarios[0].id)
                setXmlData(scenarios[0].xml);*/
                setScenarios(mockedScenarios)
                setSelectedScenario(mockedScenarios[0].id)
                setXmlData(mockedScenarios[0].xml);
            } catch (error) {
                showError(error.message);
                console.error('Error fetching scenarios:', error);
            }
        };

        fetchScenarios();
    }, []);

    const handleScenarioChange = (event) => {
        const selectedId = event.target.value;
        const selectedScenario = scenarios.find(scenario => scenario.id === selectedId);
        setSelectedScenario(selectedId);
        setXmlData(selectedScenario.xml);
    };

    return (
        <div className='select-scenario'>
            <h1>Select and edit scenario</h1>
            <Box>
                <FormControl fullWidth>
                    <Select
                        sx={{fontSize: "14px", mb: 3}}
                        value={selectedScenario}
                        onChange={handleScenarioChange}
                    >
                        {scenarios.map((scenario) => (
                            <MenuItem sx={{fontSize: "14px"}} key={scenario.id} value={scenario.id}>
                                {scenario.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <BPMNDiagram diagramXml={xmlData} createNewMode={false} />
            <ErrorSnackbar />
        </div>
    );
};

export default SelectScenario;