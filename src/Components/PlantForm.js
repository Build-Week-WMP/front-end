import { useState } from "react";
import { Styles } from "./Styled-Components";

const PlantForm = () => {
  const initialPlant = {
    nickname: "",
    species: "",
    frequency: 1,
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
    console.log("plant data in form", plant);
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
          <div className="dropdiv">
            <p>H2O Frequency Timer:</p>
            <label>
              Watering Frequency (Days)
              <select
                onChange={enterDetails}
                value={plant.frequency}
                name="frequency"
                className="dropdown"
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
          <button className="submitButton">Add Plant</button>
        </form>
      </Styles>
    </div>
  );
};

export default PlantForm;
