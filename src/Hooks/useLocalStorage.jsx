import { useEffect, useState } from 'react';
import { getBooks } from '../utils';

const useLocalStorage = () => {

    const [localData, setLocalData] = useState([]);
    // console.log(localData);
    useEffect(() => {
        setLocalData(getBooks);
    }, [])

    return { localData };
};

export default useLocalStorage;