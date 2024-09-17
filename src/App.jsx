import './App.scss'
import Header from "./components/header/Header.jsx";
import Greeting from "./components/greeting/Greeting.jsx";
import OntologyMerging from "./components/ontologyMerging/OntologyMerging.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Greeting/>}/>
                <Route path="/otolology-merging" element={<OntologyMerging/>}/>
            </Routes>
        </>
    )
}

export default App
