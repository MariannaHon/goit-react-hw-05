
import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx';

const linkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

const Navigation = () => {
    return (
        <header className={css.head}>
            <nav className={css.nav}>
                <NavLink className={linkStyle} to="/">Home</NavLink>
                <NavLink className={linkStyle} to="/movies">Movies</NavLink>
            </nav>
        </header>
    )
}

export default Navigation;