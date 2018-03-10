import React from 'react'
const imagePath = './images/'

const imageListObj = {
  // dubai_gnagna_bella: imagePath + 'dubai_gnagna_bella.jpg',
  // che_e_morto_qualcuno: imagePath + 'che_e_morto_qualcuno.JPG',
  // family_limehouse: imagePath + 'family_limehouse.jpg',
  // mimmi: imagePath + 'mimmi.jpg',
  // ny_love: imagePath + 'ny_love.jpg',
  // 'ron&immy': imagePath + 'ron&immy.jpg',
  // us_2013: imagePath + 'us_2013.jpg',
  // us_amsterdam_2: imagePath + 'us_amsterdam_2.jpg',
  // us_amsterdam: imagePath + 'us_amsterdam.jpg',
  // us_angel: imagePath + 'us_angel.jpg',
  // us_boat_to_amsterdam: imagePath + 'us_boat_to_amsterdam.jpg',
  us_florence_young: imagePath + 'us_florence_young.jpg'
  // us_guinness: imagePath + 'us_guinness.jpg',
  // us_hampstead_heath: imagePath + 'us_hampstead_heath.JPG',
  // us_leeds_castle: imagePath + 'us_leeds_castle.jpg',
  // us_london_doppiomento: imagePath + 'us_london_doppiomento.jpg',
  // us_london_eye_xmas: imagePath + 'us_london_eye_xmas.jpg',
  // us_london_tower_bridge: imagePath + 'us_london_tower_bridge.jpg',
  // us_love_london: imagePath + 'us_love_london.jpg',
  // us_newcastle_2: imagePath + 'us_newcastle_2.jpg',
  // us_newcastle: imagePath + 'us_newcastle.jpg',
  // us_oxford_street: imagePath + 'us_oxford_street.jpg',
  // us_paris: imagePath + 'us_paris.jpg',
  // us_tenerife: imagePath + 'us_tenerife.jpg',
  // us_tube_gnagna_bionda: imagePath + 'us_tube_gnagna_bionda.jpg',
  // us_versailles: imagePath + 'us_versailles.jpg',
  // us: imagePath + 'us.jpg'
  // villadistriano_lavilla: imagePath + 'villadistriano_lavilla_03-1.jpg'
}

const imageList = Object.keys(imageListObj).map((imageUrl, index) => {
  return (
    <img
      key={index}
      src={require(`${imageListObj[imageUrl]}`)}
      alt={imageUrl}
    />
  )
})

export default imageList
