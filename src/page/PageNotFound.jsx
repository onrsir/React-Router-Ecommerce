import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
        <h1>404- sayfa yok</h1>
        <Link to="/" className="btn btn-info"> Ana sayfaya gitmek için tıklayınız..</Link>
        </>
    )
}