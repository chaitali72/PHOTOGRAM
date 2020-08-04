import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
const UploadForm = () => {

const [file,SetFile ] = useState(null);
const [error,SetError ] = useState(null);
const types = ['image/png', 'image/jpeg'];

const changeHandler = (e) => {
    
    let selected = e.target.files[0];
    if(selected && types.includes (selected.type))
    {
        SetFile(selected);
        SetError('');
    }else {
        SetFile(null);
SetError('please select an Image File!!');
     
    }
}
return (
    <form>
        <label>
        <input type = "file" onChange={changeHandler} />
        <span>+</span>
        </label>
        <div className="outputimage">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={SetFile} /> }

        </div>
    </form>
)
}
export default UploadForm;