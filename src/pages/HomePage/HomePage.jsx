
import { useState, useEffect } from 'react'
import { fetchFilms } from '../../film-api'
import toast, { Toaster } from 'react-hot-toast'
import MovieList from '../../components/MovieList/MovieList'
import css from './HomePage.module.css';

const HomePage = () => {

    const [trends, setTrends] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const notify = () => toast('Something went wrong. Please, try again!');

    useEffect(() => {

        async function fetchTrends() {
            try {
                setError(false);
                setLoading(true);
                const data = await fetchFilms();
                setTrends(data.results);
            } catch (error) {
                setError(true);
                notify(); console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchTrends();
    }, []);

    return (
        <main className={css.wrapper}>
            <div>
                {loading && <div>Loading...</div>}
                {error && <Toaster />}
                <h1 className={css.title}>Trending Today</h1>
                <MovieList items={trends} />
            </div>
        </main>
    )
}

export default HomePage;