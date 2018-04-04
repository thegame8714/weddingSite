import React from 'react'
import MainNav from './MainNav'

const imagePath = 'http://api.giadazanotti.com/images/'

const imageListObj = {
	dubai_gnagna_bella: imagePath + 'dubai_gnagna_bella.jpg',
	us_amsterdam_2: imagePath + 'us_amsterdam_2.jpg',
	us_amsterdam: imagePath + 'us_amsterdam.jpg',
	us_angel: imagePath + 'us_angel.jpg',
	us_boat_to_amsterdam: imagePath + 'us_boat_to_amsterdam.jpg',
	us_leeds_castle: imagePath + 'us_leeds_castle.jpg',
	us_london_eye_xmas: imagePath + 'us_london_eye_xmas.jpg',
	us_newcastle: imagePath + 'us_newcastle.jpg',
	us_tenerife: imagePath + 'us_tenerife.jpg',
	us_tube_gnagna_bionda: imagePath + 'us_tube_gnagna_bionda.jpg',
	us_versailles: imagePath + 'us_versailles.jpg',
	us: imagePath + 'us.jpg',
	villadistriano_lavilla: imagePath + 'villadistriano_lavilla_03-1.jpg'
}

class AppWrapper extends React.Component {
  constructor() {
    super()

    this.state = {
      imageRollIndex: 0
    }

    this.imageRoll = null
  }

  componentDidMount() {
    const imageListLength = Object.keys(imageListObj).length
    if (imageListLength > 1) {
      this.imageRoll = setInterval(() => {
        if (this.state.imageRollIndex === imageListLength - 1) {
          this.setState({
            imageRollIndex: 0
          })
        } else {
          var imageRollIndex = this.state.imageRollIndex
          imageRollIndex++
          this.setState({
            imageRollIndex: imageRollIndex
          })
        }
      }, 3000)
    }
  }

  componentWillUnmount() {
    if (Object.keys(imageListObj).length > 1) {
      clearInterval(this.imageRoll)
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="img_wrapper">
            {Object.keys(imageListObj).map((imageUrl, keyIndex) => {
              if (keyIndex === this.state.imageRollIndex) {
                return (
                  <li key={keyIndex}>
                    <img
                      src={`${imageListObj[imageUrl]}`}
                      alt={imageUrl}
                      className="image image-visible"
                    />
                  </li>
                )
              }

              return (
                <li key={keyIndex}>
                  <img
                    src={`${imageListObj[imageUrl]}`}
                    alt={imageUrl}
                    className="image"
                  />
                </li>
              )
            })}
          </ul>
        </header>
        <MainNav />
        <div className="main_content">{this.props.children}</div>
      </div>
    )
  }
}

export default AppWrapper
