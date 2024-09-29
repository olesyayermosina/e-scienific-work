import './BpmnDiagram.scss';
import { useEffect, useRef, useState } from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import '@bpmn-io/properties-panel/assets/properties-panel.css';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import { Alert, Box, Button, IconButton, Snackbar } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CreateIcon from '@mui/icons-material/Create';
import {
  AccountTree,
  Close,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { newDiagram } from '../../res/newDiagram.js';
import { sendXmlAndConvert } from '../../api/convertation.js';
import { useNavigate } from 'react-router-dom';
import { useError } from '../../hooks/error.jsx';

// eslint-disable-next-line react/prop-types
const BPMNDiagram = ({ diagramXml, createNewMode }) => {
  const containerRef = useRef(null);
  const propertiesPanelRef = useRef(null);
  const modelerRef = useRef(null);
  const navigate = useNavigate();
  const { showError, ErrorSnackbar } = useError();
  const [propPanelVisible, setPropPanelVisible] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    modelerRef.current = new BpmnModeler({
      container: containerRef.current,
      keyboard: { bindTo: window },
      propertiesPanel: {
        parent: propertiesPanelRef.current,
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor,
      },
    });

    const loadDiagram = async () => {
      if (diagramXml) {
        try {
          const { warnings } = await modelerRef.current.importXML(diagramXml);
          if (warnings.length) {
            console.warn('Warnings:', warnings);
          }
          modelerRef.current.get('canvas').zoom('fit-viewport');
        } catch (error) {
          showError(error.message);
          console.error('Error rendering BPMN diagram:', error);
        }
      } else {
        await createNewDiagram();
      }
    };

    loadDiagram();

    return () => {
      modelerRef.current.destroy();
    };
  }, [diagramXml]);

  const createNewDiagram = async () => {
    if (modelerRef.current) {
      try {
        await modelerRef.current.importXML(newDiagram);
      } catch (error) {
        console.error('could not create new BPMN diagram', error);
      }
    }
  };

  const handleOpenDiagram = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.bpmn')) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const xml = e.target.result;
        try {
          await modelerRef.current.importXML(xml);
        } catch (error) {
          showError(error.message);
          console.error('could not import BPMN diagram', error);
        }
      };
      reader.readAsText(file);
    } else {
      showError('Please import BPMN file');
    }
  };

  const saveAndConvertToOwl = async () => {
    try {
      const { xml } = await modelerRef.current.saveXML({ format: true });
      const response = await sendXmlAndConvert(xml);
      await response.json();
      navigate('/scenario-converted');
    } catch (error) {
      handleNewError(error.message);
    }
  };

  const downloadBpmn = async () => {
    try {
      const { xml } = await modelerRef.current.saveXML({ format: true });
      const blob = new Blob([xml], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'diagram.bpmn';
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      showError(error.message);
      console.error('could not save BPMN diagram', error);
    }
  };

  const downloadSvg = async () => {
    try {
      const { svg } = await modelerRef.current.saveSVG();
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'diagram.svg';
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      showError(error.message);
      console.error('could not save SVG diagram', error);
    }
  };

  const handlePropPanelVisibilityToggle = () => {
    setPropPanelVisible((prev) => !prev);
  };

  const handleNewError = (message) => {
    setErrorMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now(), message },
    ]);
  };

  const handleCloseErrorBar = (id) => {
    setErrorMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.id !== id),
    );
  };

  return (
    <>
      <div className='bpmn-diagram'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          {createNewMode && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant='outlined'
                color='primary'
                component='label'
                startIcon={<FileUploadIcon />}
              >
                Open Diagram
                <input
                  type='file'
                  hidden
                  accept='.bpmn'
                  onChange={handleOpenDiagram}
                />
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<CreateIcon />}
                onClick={createNewDiagram}
              >
                New Diagram
              </Button>
            </Box>
          )}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant='outlined'
              color='primary'
              startIcon={<FileDownloadIcon />}
              onClick={downloadBpmn}
            >
              Download BPMN
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              startIcon={<FileDownloadIcon />}
              onClick={downloadSvg}
            >
              Download SVG
            </Button>
            <Button
              id='btn-toggle'
              variant='outlined'
              color='primary'
              startIcon={propPanelVisible ? <VisibilityOff /> : <Visibility />}
              onClick={handlePropPanelVisibilityToggle}
            >
              {propPanelVisible ? 'Hide Prop Panel' : 'Show Prop Panel'}
            </Button>
          </Box>
        </Box>
        <div className='content'>
          <div
            id='bpmn-container'
            style={{
              width: '100%',
              height: '500px',
              float: 'left',
              border: '1px solid #303633',
            }}
            ref={containerRef}
          />
          <div
            className={propPanelVisible ? 'visible' : 'hidden'}
            id='propertiesPanel'
            style={{
              width: '20%',
              float: 'right',
              height: '500px',
              border: '1px solid #000',
              background: '#fff',
            }}
            ref={propertiesPanelRef}
          />
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant='contained'
            color='primary'
            startIcon={<AccountTree />}
            onClick={saveAndConvertToOwl}
          >
            Save and convert to OWL
          </Button>
        </Box>
      </div>
      <div>
        {errorMessages.map((error, index) => (
          <Snackbar
            key={error.id}
            open={true}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            autoHideDuration={null}
            style={{ bottom: `${index * 60}px` }}
          >
            <Alert
              severity='error'
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                mb: 2,
              }}
              action={
                <IconButton
                  size='small'
                  aria-label='close'
                  color='inherit'
                  onClick={() => handleCloseErrorBar(error.id)}
                >
                  <Close fontSize='small' />
                </IconButton>
              }
            >
              {error.message}
            </Alert>
          </Snackbar>
        ))}
      </div>
      <ErrorSnackbar />
    </>
  );
};

export default BPMNDiagram;
