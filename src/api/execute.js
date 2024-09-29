import axios from 'axios';

const Server = axios.create({
  baseURL: 'http://localhost:8081/',
});

const fetchScenariosOwl = async () => await Server.get('/api/scenarios/owl');

const tryToExecute = async (data) =>
  await Server.post('/api/scenarios/execute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

export { fetchScenariosOwl, tryToExecute };
