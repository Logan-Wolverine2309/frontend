import { Token } from '@mui/icons-material';
import { api } from '../../config/api';
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEM_FAILURE, GET_ALL_CART_ITEM_REQUEST, GET_ALL_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from './ActionTypes';

export const findCart =(Token)=>{
    return async(dispatch)=>{
        dispatch({type:FIND_CART_REQUEST});
        try{
            const {data} = await api.get(`/cart`,{
                headers:{
                    Authorizartion:`Bearer ${Token}`
            },
        });
        dispatch({type:FIND_CART_SUCCESS,payload:data});
        console.log("find cart",data);
        } catch(error){
            console.log("catch error",error);
            dispatch({type:FIND_CART_FAILURE,payload:error});
            console.log("error",error);
        }
    }}
    
    export const getAllCartItem=(Token)=>{
        return async(dispatch)=>{
            dispatch({type:GET_ALL_CART_ITEM_REQUEST});
            try{
                const {data} = await api.get(`/cart/items`,{
                    headers:{
                        Authorizartion:`Bearer ${Token}`
            },
        });
        dispatch({type:GET_ALL_CART_ITEM_SUCCESS,payload:data});
        console.log("all cart item",data);
            } catch(error){
                console.log("catch error",error);
                dispatch({type:GET_ALL_CART_ITEM_FAILURE,payload:error});
                console.log("error",error);
            }
        }}
        
        export const addItemToCart=({Token,itemId,quantity})=>{
            return async(dispatch)=>{
                dispatch({type:ADD_ITEM_TO_CART_REQUEST});
                try{
                    const {data} = await api.post(`/cart/item/${itemId}`,{
                        quantity
                    },{
                        headers:{
                            Authorizartion:`Bearer ${Token}`
                },
            });
            dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data});
            console.log("add item to cart",data);
                } catch(error){
                    console.log("catch error",error);
                    dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error});
                    console.log("error",error);
                }
            }}
            
            export const updateCartItem=({Token,itemId,quantity})=>{
                return async(dispatch)=>{
                    dispatch({type:UPDATE_CART_ITEM_REQUEST});
                    try{
                        const {data} = await api.put(`/cart/item/${itemId}`,{
                            quantity
                        },{
                            headers:{
                                Authorizartion:`Bearer ${Token}`
                    },
                });
                dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data});
                console.log("update cart item",data);
                    } catch(error){
                        console.log("catch error",error);
                        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error});
                        console.log("error",error);
                    }
                }}
                
            