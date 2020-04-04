import React from "react";
import PlaceItem from "./PlaceItem";


const PlaceList = ({ places }) => {
 
  return (
    <div>
      {places.length === 0 ? (
        <p>no places found</p>
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
          />
        ))
      )}
    </div>
  );
};

export default PlaceList;
