import { api } from "../../config/api";

export const getIncrediantsOfRestaurant = (id,jwt) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/restaurant/${id}/ingredients`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("get all ingredients", response.data);
            dispatch({
                type: actionTypes.GET_INGREDIENTS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const createIngredient = ({data,jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.post(`/api/admin/ingredients`,data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("create ingredient", response.data);
            dispatch({
                type: actionTypes.CREATE_INGREDIENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const createIngredientCategory = ({id,jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.post(`/api/admin/ingredients/restaurant/${id}/category`,data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("create ingredient category", response.data);
            dispatch({
                type: actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const getIngredientCategory = ({id,jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("get ingredient category", response.data);
            dispatch({
                type: actionTypes.GET_INGREDIENT_CATEGORY,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const updateStockOfIngredient = ({id,jwt}) => {
    return async (dispatch) => {
        try {
            const {data} = await api.put(`/api/admin/ingredients/${id}/stock`,{}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("update stock of ingredient", response.data);
            dispatch({
                type: actionTypes.UPDATE_STOCK_OF_INGREDIENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            console.log("error", error);
        }
    };
};

