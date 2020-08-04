import {useState,useEffect} from 'react';
import {projectStorage,timestamp,projectFirestore } from '../firebase/config';


const useStorage = (file) => {
    const [progress,SetProgress ] = useState(0);
const [error,SetError ] = useState(null);
const [url,setUrl ] = useState(null);

useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      SetProgress(percentage);
    }, (err) => {
      SetError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
      setUrl(url);
    });
  }, [file]);

return {progress,url,error}
}
export default useStorage;