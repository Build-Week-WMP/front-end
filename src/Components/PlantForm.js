import { useState } from "react";
import { Styles } from "./Styled-Components";
import axios from 'axios'

const PlantForm = () => {
  const initialPlant = {
    nickname: "",
    species: "",
    h2oFrequency: 1,
  };

  const [plant, setPlant] = useState(initialPlant);

  const enterDetails = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    setPlant({ ...plant, [name]: value });
    console.log("plant changed", plant);
  };

  const createPlant = (e) => {
    e.preventDefault();

    axios.post('https://beta-water-my-plants.herokuapp.com/api/plants', plant)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <div>
      <Styles>
        <h1>Add Your Plant!</h1>
        <form onSubmit={createPlant}>
          <label>
            nickname:
            <input
              onChange={enterDetails}
              type="text"
              value={plant.nickname}
              name="nickname"
              placeholder="Enter nickname"
            />
          </label>
          <label>
            species:
            <input
              onChange={enterDetails}
              type="text"
              value={plant.species}
              name="species"
              placeholder="Enter species"
            />
          </label>
          <div>
            <p>H2O Frequency Timer:</p>
            <label>
              Watering Frequency (Days)
              <select
                onChange={enterDetails}
                value={plant.h2oFrequency}
                name="h2oFrequency"
              >
                <option>--Select Days--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="7">7</option>
                <option value="14">14</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
          <button className="submitButton">Add The Plant</button>
        </form>
      </Styles>
    </div>
  );
};

export default PlantForm;
