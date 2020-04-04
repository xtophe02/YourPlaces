import React from 'react'

const Map = ({center, zoom}) => {
  const mapRef = React.useRef()

  React.useEffect(()=>{

      const map = new window.google.maps.Map(mapRef.current,{
        center,
        zoom
      })
      new window.google.maps.Marker({position: center, map})
    
  },[center, zoom])

   
  
  return (
    <div ref={mapRef} className='box' style={{height:'40rem', width:'100%'}}>
      
    </div>
  )
}

export default Map
