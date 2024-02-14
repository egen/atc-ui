import React, { useEffect, useState } from "react";
import "./Cat.scss";
import CatCard from "../../components/CatCard/CatCard";
import CatService from "../../services/Cat/cat.service";

function Cat() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchCats = async () => {
      const data = await CatService.getCats();
      setCats(data);
    };
    fetchCats();
  }, []);
  return (
    <div className="cats-container">
      {cats.map((c: any) => (
        <CatCard cat={c} key={c.id} />
      ))}
    </div>
  );
}

export default Cat;
