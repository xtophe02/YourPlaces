import React from "react";
import PlaceItem from "./PlaceItem";
import Link from 'next/link'

const PlaceList = ({ places }) => {
 
  return (
    <div>
      {places.length === 0 ? (
        <>
        <p>no places found</p>
        <Link href='/addPlace'>
        <button className="button is-primary is-outlined">Add Place</button></Link>
        </>
      ) : (
        places.map((place) => (
          <PlaceItem
            key={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creater}
            coordinates={place.location}
            id={place.id}
          />
        ))
      )}
    </div>
  );
};

export default PlaceList;
