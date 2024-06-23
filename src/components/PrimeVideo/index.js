// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  return (
    <div className="bg-container">
      <div className="prime-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image"
        />
      </div>
      <main className="main-container">
        <h1 className="slide-heading">Action Movies</h1>
        <MoviesSlider movies={actionMoviesList} />
        <h1 className="slide-heading">Comedy Movies</h1>
        <MoviesSlider movies={comedyMoviesList} />
      </main>
    </div>
  )
}

export default PrimeVideo
