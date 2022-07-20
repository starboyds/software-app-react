import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Search = () => {
    const {slug} = useParams();

    const [price, setPrice] = useState(0);
    const [license, setLicense] = useState('');

    const [softwares, setSoftwares] = useState([]);

    const fetchSoftwares = async() => {
        
        const requestOptions = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                searchText: slug,
            })
        }
        let res = await fetch('/api/search', requestOptions)
        const data = await res.json();
        setSoftwares(data);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(price, license)

        const requestOptions = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                searchText: slug,
                startPrice: 0,
                endPrice: price,
                license: license
            })
        }
        let res = await fetch('/api/search', requestOptions)
        const data = await res.json();
        console.log(data)
        setSoftwares(data);
    }

    useEffect(() => {
        fetchSoftwares()
    },[slug])

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h4>Filters</h4>
                <form onSubmit={handleSubmit}>
                Price: <input type="range" min={0} max={1000} onMouseUp={(e) => setPrice(e.target.value)} /> {price} <br />
                License: <select name="license" id="license" onChange={(e) => setLicense(e.target.value)}>
                            <option value="">Please select</option>
                            <option value="free">free</option>
                            <option value="paid">paid</option>
                        </select>
                        <br/>
                        <br/>
                    <button>Apply Filter</button>
                </form>

                <hr />
                {
                    softwares.map((el) => {
                        return <div key={el._id}>
                            <h3>{el.name}</h3>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Search