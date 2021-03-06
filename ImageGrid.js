import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    const { docs } = useFirestore('images');

    return (
        <div className="image-grid">
{docs && docs.map(doc => (
    <div className="mg-wrap" key={doc.id} >
        <img src= {doc.url} alt = "uploaded pic"></img>
    </div>

)) }
     </div>  
    );
}
    export default ImageGrid;