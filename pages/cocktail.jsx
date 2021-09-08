import axios from "axios";
import React, { useEffect, useState } from "react";
function CocktailMenu({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParam, setSearchParam] = useState("");
  const [drinks, setDrinks] = useState([]);
  const handleGetDrinks = () => {
    setIsLoading(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`)
      .then((drinkList) => {
        setDrinks(drinkList.data.drinks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleGetDrinks();
  }, []);
  console.log("vinh");
  return (
    <div>
      <div>
        {drinks?.map((drink) => {
          return <div key={drink.idDrink}>{drink.strDrink}</div>;
        })}
      </div>
    </div>
  );
}

export default CocktailMenu;
// CocktailMenu.getInitialProps = async (ctx) => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   console.log("vinh");
//   const res = await axios.get(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`
//   );
//   const json = await res.data.drinks;
//   return { drinks: json };
// };
