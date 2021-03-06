import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const HomeSection = () => {
    const [softwares, setSoftwares] = useState([]);

    const fetchSoftwares = async() => {
        const prod = await fetch(`/api/softwares`);
        const data = await prod.json();
        setSoftwares(data.softwares)
    }

    useEffect(() => {
        fetchSoftwares();
    },[]) 

    return (
        <div className='container'>
            <div className='row mt-3'>
                {/* <div className='col-md-3'>
                    <h3>Categories</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Windows</li>
                        <li className="list-group-item">Linux</li>
                        <li className="list-group-item">Mac</li>
                        <li className="list-group-item">Browsers</li>
                        <li className="list-group-item">Multimedia</li>
                    </ul>
                </div> */}
                <div className='col'>
                    <h3>Popular</h3>
                    <div className='row'>
                        {softwares.map((el) => {
                            return <div className='col' key={el._id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img src={el.image_url} alt={el.name} className="img-thumbnail" style={{maxHeight: "220px"}} />
                                        <Link to={`/software/${el._id}`}><center><span>{el.name}</span></center></Link>
                                        <hr />
                                        <p>{ el.desc.slice(0,45) +" ..."}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}

export default HomeSection
