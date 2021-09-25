import React, { useState, useEffect } from "react";
import { Styles } from "./Styled-Components";
import PlantCard from "./PlantCard";
import axios from "axios";

function PlantList(props) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://beta-water-my-plants.herokuapp.com/api/plants")
        .then((response) => {
          console.log(response.data);
          setPlants([...response.data]);
          console.log("these are plants:", plants);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <Styles>
      <div>
        {plants.map((plant) => (
          <PlantCard plant={plant} key={plant.plant_id} />
        ))}
      </div>
    </Styles>
  );
}

export default PlantList;
