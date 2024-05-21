
import { useParams, useLocation, Link, Outlet } from "react-router-dom"
import { useState, useEffect, Suspense } from 'react'
import { fetchFilmsDetails } from "../../film-api"
import toast, { Toaster } from 'react-hot-toast'
import css from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const { movieId } = useParams();

    const notify = () => toast.error('Something went wrong. Please, try again!');

    useEffect(() => {

        async function fetchDetails() {
            try {
                setError(false);
                setLoading(true);
                const data = await fetchFilmsDetails(movieId);
                setDetails(data);
            } catch (error) {
                setError(true);
                notify(); console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchDetails();
    }, [movieId]);

    const { poster_path, backdrop_path, original_title, popularity, overview, genres } = details;

    return (
        <main className={css.container}>
            <div>
                {loading && <div>Loading...</div>}
                {error && <Toaster />}
                <Link className={css.back} to={location.state?.from || '/movies'}>Go back</Link>
                <div className={css.wrapper}>
                    <img className={css.image} src={poster_path
                        ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : `https://image.tmdb.org/t/p/w300${backdrop_path}`}
                        loading='lazy' alt='Image of film' />
                    <div>
                        <h1 className={css.title}>{original_title}</h1>
                        {popularity && <p className={css.text}>User score: {popularity}</p>}
                        {overview && <h2 className={css.subtitle}>Overview</h2>}
                        {overview && <p className={css.text}>{overview}</p>}
                        {genres && genres.length > 0 && (
                            <div className={css.text}>
                                <h2 className={css.subtitle}>Genres</h2>
                                <ul>
                                    {genres.map(({ id, name }) => <li key={id}>{name}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className={css.additional}>
                    <h3 className={css.subtitle}>Additional information</h3>
                    <ul>
                        <li>
                            <Link className={css.back} to="cast" state={{ from: location.state?.from }}>Cast</Link>
                        </li>
                        <li>
                            <Link className={css.back} to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
                        </li>
                    </ul>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>

        </main>
    )
}

export default MovieDetailsPage;