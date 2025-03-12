import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientCategoryForm = () => {
    const [formData, setFormData] = useState({
        name:"",
    });
    const handleSubmit = () => {

        const data={
            name:formData.categoryName,
            restaurantId:{
                id:1
            },
        };
        console.log(formData);
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
                                label="catagory"
                                id="name"
                                name="categoryname"
                                varient="outlined"
                                onChange={handleInputChange}
                                value={FormData.name}
                                >
                    
                    </TextField>
                    <Button variant="contained" type="submit"> 
                        Create Category 
                    </Button>
                </form>

        </div>
    
    </div>
  );
};

export default CreateIngredientCategoryForm;