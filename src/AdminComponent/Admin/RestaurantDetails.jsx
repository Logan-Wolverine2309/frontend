import React from 'react'
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantStatus } from '../../component/State/Restaurant/Action';

export const RestaurantDetails = () => {
  const {restaurant} = useSelector((store) => store);
  const dispatch = useDispatch()

  
  const handleRestuarantStatus = () => {
    dispatch(updateRestaurantStatus({
      restaurantId:restaurant.usersRestaurant.id,
      jwt:localStorage.getItem("jwt")
    }))
  };
  return (
    <div className="lg:px-20 px-5 pb-10">
      <div className='py-5 flex justify-center items-center gap-5'>

        <h3 className='text-xl lg:text-4xl text-center font-bold p-3'> 
          {restaurant.usersRestaurant?.name} 
          </h3> 
          <div>
            <Button 
            className="py-[1rem] px-[2rem]" 
            onClick={handleRestuarantStatus} 
            size="large"
            variant="contained" 
            color={!restaurant.usersRestaurant?.open ? "primary" : "error"}>
              {restaurant.usersRestaurant?.open ? "close" : "open"}
            </Button>
          </div>
      </div>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
          </Grid>
          <Grid item xs={12}>

            <Card>
              <CardHeader 
                title={<span className="text-gray-300">Restaurant</span>}
              />
              <CardContent>
                <div className="space-y-5 text-gray-200">
                  <div className="flex">
                    <p className="w-48">Owner</p>
                    <p className="text-gray-200">
                    <span className="pr-5">---</span>
                    {restaurant.usersRestaurant?.owner.fullName};
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Restuarant Name</p>
                    <p className="text-gray-200">
                    <span className="pr-5">---</span>
                    {restaurant.usersRestaurant?.name}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Cuisine Type</p>
                    <p className="text-gray-200">
                    <span className="pr-5">---</span>
                    {restaurant.usersRestaurant?.cuisineType}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Opening Hours</p>
                    <p className="text-gray-200">
                    <span className="pr-5">---</span>
                    {restaurant.usersRestaurant?.openingHours}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Status</p>
                    <p className="text-gray-200">
                    <span className="pr-5">---</span>
                    {restaurant.usersRestaurant && restaurant.usersRestaurant.open ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-900">Open</span>
                    ) : (
                      <span className="px-5 py-2 rounded-full bg-red-400 text-gray-900">Close</span>
                    )};
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card>
              <CardHeader 
                title={<span className="text-gray-300"> Address </span>}
              />
              <CardContent>
              <div className="space-y-5 text-gray-200">
                <div className="flex">
                  <p className="w-48">Country</p>
                  <p className="text-gray-200">
                  <span className="pr-5">---</span>
                    India
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-gray-200">
                  <span className="pr-5">---</span>
                    Kolkata
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal Code</p>
                  <p className="text-gray-200">
                  <span className="pr-5">---</span>
                    700001
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="text-gray-200">
                  <span className="pr-5">---</span>
                    1, Park Street
                  </p>
                </div>
              </div>
              </CardContent>
              </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardHeader 
                    title={<span className="text-gray-300">Contact-Info</span>}
                  />
                  <CardContent>
                    <div className="space-y-5 text-gray-200">
                      <div className="flex">
                        <p className="w-48">Email</p>
                        <p className="text-gray-200">
                        <span className="pr-5">---</span>
                        {restaurant.usersRestaurant?.contactInformation?.email}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Mobile No.</p>
                        <p className="text-gray-200">
                        <span className="pr-5">---</span>
                        {restaurant.usersRestaurant?.contactInformation?.mobile}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Social Status</p>
                        <div className="flex gap-5 text-gray-400 items-center items-center pb-3">
                          <span className="pr-5">---</span>
                          <a href= {restaurant.usersRestaurant?.contactInformation?.facebook}>
                            <FacebookIcon sx={{ fontSize:"2rem" }} />
                          </a>
                          <a href= {restaurant.usersRestaurant?.contactInformation?.instagram}>
                            <InstagramIcon sx={{ fontSize:"2rem" }} />
                          </a>
                          <a href= {restaurant.usersRestaurant?.contactInformation?.x}>
                            <XIcon sx={{ fontSize:"2rem" }} />
                          </a>
                          <a href= {restaurant.usersRestaurant?.contactInformation?.linkedIn}>
                            <LinkedInIcon sx={{ fontSize:"2rem" }} />
                          </a>
                      </div>

                    </div>
                  </div>
                  </CardContent>
                </Card>
                </Grid>
        </Grid>
    </div>
  )
}
export default RestaurantDetails;
