import "./OntologyMerging.scss";
import {Button} from "@mui/material";
import {useRef} from "react";

const OntologyMerging = () => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!/.owx/i.test(file.name)){
            throw new Error("Incorrect file name");
        }
        console.log(`Selected file: ${file.name}`);
    };
    return (
        <div className="ontologyMerging">
            <h1>Ontology merging</h1>
            <p>Please, in case you have ontology that can increase knowledge in our system - upload it in OWL format and
                start merging process.</p>
            <div className={'buttons'}>
                <div>
                    <input type={"file"}
                           ref={fileInputRef}
                           style={{ display: 'none' }}
                           onChange={handleFileChange}
                           accept={".owx"}
                    />
                    <Button variant={"outlined"} color={"primary"}  size={"extraLarge"} onClick={handleButtonClick}>
                        Select file to upload
                    </Button>
                </div>

                <Button variant={"outlined"} color={"secondary"}  size={"extraLarge"}>
                    Start merging process
                </Button>
            </div>
        </div>
    )
}

export default OntologyMerging;