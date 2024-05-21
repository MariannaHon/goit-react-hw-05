import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

import Navigation from './components/Navigation/Navigation'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));


function App() {

  return (
    <div className='app-container'>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={< HomePage />} />

          <Route path='/movies' element={
            <MoviesPage />} />

          <Route path='/movies/:movieId' element={
            <MovieDetailsPage />}>
            <Route path='cast' element={< MovieCast />} />

            <Route path='reviews' element={< MovieReviews />} />
          </Route>

          <Route path='*' element={< NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
