
import { Link, useLocation } from 'react-router-dom'
import css from './MovieList.module.css'

const MovieList = ({ items }) => {
    const location = useLocation();
    return (
        <ul>
            {items.map((item) => (
                <li className={css.item} key={item.id}>
                    <Link to={`/movies/${item.id}`} state={{ from: location }}>
                        <p>{item.original_title}</p>
                    </Link>
                </li>
            ))
            }
        </ul>
    )
}

export default MovieList;