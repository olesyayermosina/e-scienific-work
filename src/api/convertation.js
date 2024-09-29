import axios from "axios";

const Server = axios.create({
    baseURL: 'http://localhost:8080/'
})

const fetchScenariosXML = async () => await Server.get('/api/scenarios');

const sendXmlAndConvert = async (xmlData) => await Server.post('/api/convert', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/xml',
    },
    body: xmlData
});

export {
    fetchScenariosXML,
    sendXmlAndConvert
};