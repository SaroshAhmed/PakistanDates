import React from "react";

const List = ({people}) =>{
return(
    <h3>
    {people.map((person)=>{
        const{id, name, dob, image} = person;
        return(
        <article key={id} className='person'>
            <img src={image} alt={name} className='img'/>
            <h4>{name}</h4>
            <p className="p1">{dob}</p>

        </article>
        )
    })}
    </h3>
)
}

export default List;