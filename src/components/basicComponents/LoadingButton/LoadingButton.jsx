import './LoadingButton.css'
import { Button, Spinner } from 'react-bootstrap'

const LoadingButton = () => {

    return (
        <Button variant="light" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    )
}

export default LoadingButton