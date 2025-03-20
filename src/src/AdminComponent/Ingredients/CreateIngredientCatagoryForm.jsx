import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createIngredientCategory } from '../../component/State/Ingredients/Action';
import { useDispatch, useSelector } from 'react-redux';
import { name } from 'file-loader';


const CreateIngredientCategoryForm = () => {
    const dispatch = useDispatch(); 
        const jwt = localStorage.getItem("jwt");
        const { restaurant } = useSelector(store=>store)
    const [formData, setFormData] = useState({
        name:"",
    });
    const handleSubmit = ( e ) => {
        e.preventDefault()
        const data = {name:formData.name,restaurantId:restaurant.usersRestaurant.id}

        console.log(formData)
        dispatch(createIngredientCategory({data:formData , jwt}))

       
    };
        const handleInputChange = (e) => {
            const {name,value}=e.target
            setFormData({
                ...formData,[name]:value,
            })
        }
  return (
    <div className=''>
        <div className="p-5">
            <h3 className="text-gray-400 text-center text-xl pb-10">
                Create Ingredient Category
            </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <TextField fullWidth
                                label="Catagory Name"
                                id="name"
                                name="categoryname"
                                varient="outlined"
                                onChange={handleInputChange}
                                value={formData.catagoryname}
                                >               
                    </TextField>
                    <Button variant="contained" type="submit"> 
                        Create Ingredient Category 
                    </Button>
                </form>

        </div>
    
    </div>
  );
};

export default CreateIngredientCategoryForm;