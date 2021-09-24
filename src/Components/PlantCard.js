import React from 'react'

function PlantCard(props) {
    const { plant } = props
    console.log("props plant:", plant)
    return (
        <div>
            <h2>plant nickname: {plant.nickname} </h2>
            <h2>plant species: {plant.species}</h2>
            <h2>plant water frequency: {plant.h2oFrequency}</h2>
        </div>
    )
}

export default PlantCard
