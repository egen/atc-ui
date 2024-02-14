import React from "react";
import "./CatCard.scss";
import Card from "@mui/material/Card";

function CatCard({ cat }: any) {
  return (
    <Card className="cat-card" key={cat.id}>
      <img alt="cat" src={cat.url} />
    </Card>
  );
}

export default CatCard;
