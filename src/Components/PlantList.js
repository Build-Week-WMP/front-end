import React, { useState, useEffect } from 'react'
import { Styles } from "./Styled-Components";
import fetchPlantService from '../services/fetchPlantService';
import axios from 'axios'

function PlantList() {
    const [plants, setPlants] = useState('')

    useEffect(() => {
        axios
          .get('https://beta-water-my-plants.herokuapp.com/api/plants')
          .then(response => {
            // setPlants(response.data)
            console.log(response)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    

    return (
        <Styles>
            <div>
                test
            </div>
        </Styles>
        
    )
}

export default PlantList
