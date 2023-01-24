import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container fluid className='details'>
        <div>
            <h1 className='montserrat'>Oops! You seem to be lost.</h1>
            <p className='roboto paragraphtext'>Please return to the <Link to='/' className='join-link'>homepage</Link>.</p>
        </div>
        </Container>
    )
}