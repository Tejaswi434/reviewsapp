import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  left = () => {
    const {review} = this.state
    const newVar = review - 1
    if (newVar < 4 && newVar >= 0) {
      this.setState({review: newVar})
    }
  }

  right = () => {
    const {review} = this.state
    const newVar = review + 1
    if (newVar >= 0 && newVar < 4) {
      this.setState({review: newVar})
    }
  }

  render() {
    const {review} = this.state
    const {reviewsList} = this.props
    console.log(review)
    return (
      <div className="mainContainer">
        <h1 className="whiteText">Reviews</h1>
        <img
          src={reviewsList[review].imgUrl}
          className="image"
          alt={reviewsList[review].username}
        />
        <div className="rowingButton">
          <button
            type="button"
            className="but left erase"
            onClick={this.left}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="para">{reviewsList[review].username}</p>
          <button
            type="button"
            className="but right erase"
            onClick={this.right}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="longText smallLeft">{reviewsList[review].companyName}</p>
        <p className="longText">{reviewsList[review].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
