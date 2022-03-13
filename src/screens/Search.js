import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Search = () => {
    const {slug, platform} = useParams();

    const [softwares, setSoftwares] = useState([]);

    const fetchSoftwares = async() => {
        const requestOptions = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                searchText: slug
            })
        }
        let res = await fetch('http://localhost:3001/api/search', requestOptions)
        const data = await res.json();
        setSoftwares(data);
    }

    useEffect(() => {
        fetchSoftwares()
    },[slug])

  return (
    softwares.map((el) => {
        return <div key={el._id}>
            <h3>{el.name}</h3>
        </div>
    })
  )
}

export default Search