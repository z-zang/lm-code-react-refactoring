import { useFetch } from '../hooks/useFetch'
import TripCard from './TripCard';

const TripsList = () => {
    const { data: tripsList, isLoading } = useFetch();

    return (
        <>
            {isLoading && <h2>Loading...</h2>}
            {tripsList && (
                <div className="trips">
                    <h3>We found {tripsList.length} trips for you!</h3>{" "}
                    <ul className="trip-list">
                        {tripsList.map(
                            (tripData) => <TripCard tripData={tripData} />
                        )}
                    </ul>
                </div>
            )}
        </>
    )
}

export default TripsList