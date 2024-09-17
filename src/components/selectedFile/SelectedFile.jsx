import './SelectedFile.scss';

// eslint-disable-next-line react/prop-types
const SelectedFile = ({fileName}) => {
    return (
        <div className="selectedFile">
            <p className={"selectedFile_title"}>Selected file: <span className={"selectedFile_name"}> {fileName}</span></p>
        </div>
    )
}

export default SelectedFile;