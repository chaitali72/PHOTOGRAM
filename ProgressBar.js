import React, { useEffect } from 'react';
import useStoragehook from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStoragehook(file);
  
    useEffect(() => {
      if (url) {
        setFile(null);
      }
    }, [url, setFile]);

    return (
<div className="progressbar" style={{width:progress + '%'}}></div>
    );

    }
export default ProgressBar;