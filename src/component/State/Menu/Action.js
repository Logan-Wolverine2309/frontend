import { API } from "../../config/api";
import{
    CREATE_MENU_ITEM_FAILURE,
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,
    UPDATE_MENU_ITEM_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,
} from "./ActionType";

export const createMenuItem=({menuData, jwt})=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try{
            const {data}=await API.post(`/api/admin/menu`,menuData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("create menu item",data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
            console.log("create menu item success",data);
        } catch(error){
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};

export const getMenuItemsByRestaurantId=(restaurantId)=>{
    return async(dispatch)=>{
        dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST});
        try{
            const {data}=await API.get(`/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}
                &seasonal=${reqData.Seasonal}&food_category=${reqData.foodCategory}`,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                },
            }
         );
         console.log("get menu item by restaurant id",data);
            dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS,payload:data});
            console.log("get menu item by restaurant id",data);
        } catch(error){
            dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE,payload:error});
            console.log("error",error);
        };
    };
};

