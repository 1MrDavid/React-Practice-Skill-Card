import React from 'react'

export function PersonSkills({icon,name}){
    return (
        <div className="sc-skillsection" id={name}>
            <img src={icon} alt="image" />
            <p>{name}</p>
        </div>
    )
}