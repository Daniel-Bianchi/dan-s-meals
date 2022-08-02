import React, { useEffect } from "react";
import axios from "axios";


const recipes = [recipes, setRecipes] = useState();

useEffect(() => {
    axios
        .get("https:www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => (response.data))
        .then((data) => (console.log(data)))
}, []);

export default API;