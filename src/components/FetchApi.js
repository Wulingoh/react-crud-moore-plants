import { useEffect, useState } from 'react';
import axios from "axios";
import { API_HOST } from "../config";

export const useCategoryList = _ => {

    const [categories, setCategories] = useState([]);

    const getAllCategories = () => {
        axios.get(`/api/admin/category`)
            .then(function(response) {
                const allCategories = response.data;
                setCategories(allCategories);  
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getAllCategories();
    }, []);

return categories;
}

export const useLightingCareList = _ => {

    const [lightingCares, setLightingCares] = useState([]);

    const getAllLightingCares = () => {
        axios.get(`/api/admin/lighting`)
            .then(function(response) {
                const allLightingCares = response.data;
                setLightingCares(allLightingCares);  
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getAllLightingCares();
    }, []);

return lightingCares;
}

export const useCareLevelList = _ => {

    const [careLevels, setCareLevels] = useState([]);

    const getAllCareLevels = () => {
        axios.get(`/api/admin/care_level`)
            .then(function(response) {
                const allCareLevels = response.data;
                setCareLevels(allCareLevels);  
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getAllCareLevels();
    }, []);

return careLevels;
}

export const useWateringList = _ => {

    const [wateringList, setWateringList] = useState([]);

    const getWateringList = () => {
        axios.get(`/api/admin/watering`)
            .then(function(response) {
                setWateringList(response.data);  
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getWateringList();
    }, []);

return wateringList;
}

export const useHumidityList = _ => {

    const [humidityList, setHumidityList] = useState([]);

    const getHumidityList = () => {
        axios.get(`/api/admin/humidity`)
            .then(function(response) {
                setHumidityList(response.data);  
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getHumidityList();
    }, []);

return humidityList;
}


export const login = async (data) => {
  const response = await axios.post("/api/auth/login", data);

  return response.data;
}

export const logout = async() => {
  const response = await axios.post("/api/auth/logout");

  return response.data;
}


export const getCurrentUser = async() => {
  const response = await axios.get("/api/auth/session");

  return response.data;
}

export const signUp = async (data) => {
  const response = await axios.post("/api/auth/signup", data);

  return response.data;
}

export const useLightingCareShopList =_ =>{

    const [lightingCare, setLightingCare] = useState([]);

    const getAllLightingCare = () => {
        axios.get(`/api/customer/lighting`)
            .then(function(response) {
                const allLightingCare = response.data;
                setLightingCare(allLightingCare);  
            })
            .catch(error => console.error(`Error: ${error}`));
    }
    useEffect(() => {
        getAllLightingCare();
    }, []);
return lightingCare;
}

export const useCareLevelShopList = _ => {

    const [careLevels, setCareLevels] = useState([]);

    const getAllCareLevels = () => {
        axios.get(`/api/customer/care_level`)
            .then(function(response) {
                const allCareLevels = response.data;
                setCareLevels(allCareLevels);  
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getAllCareLevels();
    }, []);

return careLevels;
}

export const useCategoryShopList = _ => {

    const [category, setCategory] = useState([]);

    const getAllCategories = () => {
        axios.get(`/api/customer/category`)
            .then(function(response) {
                const allCategories = response.data;
                setCategory(allCategories);  
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    useEffect(() => {
        getAllCategories();
    }, []);

return category;
}
