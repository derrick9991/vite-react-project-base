import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function NotFoundView() {
    const error = useRouteError();
    let errorMessage: string;
    console.log(error);
    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return (
        <div>
            {errorMessage}
            <div>test</div>
        </div>
    );
}
