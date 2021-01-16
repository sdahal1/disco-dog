import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = (props) => {
    const [dogs, setDogs] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:8000/api/dogs")
            .then(res=> {
                console.log("*********",res)
                setDogs(res.data.results)
            })
            .catch(err=> console.log(err))
    }, [])

    return (
        <div>
            <Link to = "/new">Add Disco Dog</Link>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Dog</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dogs.map((dog,i)=>{
                        return <tr key = {i}>
                            <td>{dog.name}</td>
                            <td>
                                <Link className= "btn btn-primary mr-2" to = {`/edit/${dog._id}`}>Edit</Link>
                                <button className= "btn btn-danger">Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            
        </div>
    );
};

export default Main;