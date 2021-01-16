import axios from 'axios';
import React , {useState} from 'react';
import Axios from 'axios';
import {navigate, Navigate} from "@reach/router";
import DogForm from '../components/DogForm';


const Create = (props) => {

    const [dogForm, setDogForm] = useState({
        name:"",
        breed: "",
        age: 0,
        favoriteMove: "",
        isLit: false
    });
    const [errors, setErrors] = useState({
        name: "",
        breed:"",
        age:""
    })

    const handleInputChange = e => {
        if(e.target.type ==="checkbox"){
            setDogForm({
                ...dogForm,
                isLit: !dogForm.isLit
            })
        }
        else{
            setDogForm({
                ...dogForm,
                [e.target.name]:e.target.value
            })
        }
    }

    const handleSubmit = e=>{
        e.preventDefault();
        Axios.post("http://localhost:8000/api/dogs/create", dogForm)
            .then(res=>{
                if(res.data.results){
                    navigate("/")
                }
                else{
                    setErrors(res.data)
                }
            })
    }



    return (
        <div>
            <div>
                <h2 className="text-center">Add a dog to the disco!</h2>
                <DogForm
                    form= {dogForm}
                    handleInputChange = {handleInputChange}
                    handleSubmit = {handleSubmit}
                    errors = {errors}
                    submitValue = "Add Dog"
                
                ></DogForm>

            </div>
        </div>
    );
};

export default Create;