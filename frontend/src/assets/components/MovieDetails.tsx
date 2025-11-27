import { useParams } from "react-router-dom"

export const MovieDetails = () => {
    const {title} = useParams();
    return (
        <div>
            <h1>Now showing: {title}</h1>
        </div>
    )
}