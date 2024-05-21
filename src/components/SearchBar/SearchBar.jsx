
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
    const notify = () => toast('Write something, please!');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const search = form.elements.search.value;

        if (form.elements.search.value.trim() === "") {
            return notify();
        }
        onSearch(search);
        form.reset();
    };



    return (
        <div className={css.wrapper}>
            <Toaster />
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search films"
                />
                <button className={css.btn} type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;