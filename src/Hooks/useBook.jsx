import { useEffect, useState } from "react";


const useBook = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch('./data.json');
            const data = await res.json();
            setData(data);
            // console.log(data);
            setLoading(false);
        };
        fetchData(data);
    }, [])

    return {data, loading}
};

export default useBook;