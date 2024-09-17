import "./OntologyMerging.scss";
import {Button} from "@mui/material";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {mergeOntologies} from "../../redux/slices/mergingSlice.js";
import SelectedFile from "../selectedFile/SelectedFile.jsx";

const OntologyMerging = () => {
    const fileInputRef = useRef(null);
    const merging = useSelector(state => state.merging);
    const {loading, error, data} = merging;
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const formData = new FormData();
    let [filename, setFileName] = useState("");

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!/.owx/i.test(file.name)){
            throw new Error("Incorrect file name");
        }
        setFileName(file.name);
        formData.append("file", file);
        console.log(filename);
    };

    const handleSubmit = async (event) => {
       event.preventDefault();
        try {
            dispatch(mergeOntologies(formData));
        }catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className="ontologyMerging">
            <h1>Ontology merging</h1>
            <p>Please, in case you have ontology that can increase knowledge in our system - upload it in OWL format and
                start merging process.</p>
            <div className={'buttons'}>
                <div className={"fileSelecting"}>
                    <input type={"file"}
                           ref={fileInputRef}
                           style={{ display: 'none' }}
                           onChange={handleFileChange}
                           accept={".owx"}
                    />
                    <Button variant={"outlined"} color={"primary"}  size={"extraLarge"} onClick={handleButtonClick}>
                        Select file to upload
                    </Button>
                    {

                        (filename.length > 0) && <SelectedFile fileName={filename}/>
                    }
                </div>

                <Button variant={"outlined"} color={"secondary"}  size={"extraLarge"} onClick={handleSubmit}>
                    Start merging process
                </Button>
            </div>
            <div>
                {
                    loading && <p>Loading..</p>
                }
                {
                    (!loading && !error) && <p>{data}</p>
                }
                {
                    (!loading && error) && <p>{error}</p>
                }
            </div>
        </div>
    )
}

export default OntologyMerging;