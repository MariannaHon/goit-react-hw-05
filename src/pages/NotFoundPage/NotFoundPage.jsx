
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <h1>Page is not found</h1>
            <Link to="/">Go back to Home</Link>
        </>
    )
}

export default NotFoundPage;