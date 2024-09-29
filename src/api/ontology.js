import axios from 'axios';

const Server = axios.create({
  baseURL: 'http://localhost:3000/',
});

const uploadOntology = async (formData) =>
  await Server.post('/ontology', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export { uploadOntology };
