import { TripDatum } from '../hooks/useFetch'

type Props = {
    tripData: TripDatum
}

const TripCard = ({ tripData }: Props) => {
    const {
        id,
        tripName,
        description,
        imageUrl,
        cost,
        lengthInDays,
        isBookable,
    } = tripData

    const handleClick = (selectedTrip: string) => {
        if (selectedTrip) {
            const tripDetails = selectedTrip.split("/");
            const experience = tripDetails[0];
            const cost = parseInt(tripDetails[1]);
            alert(
                `Okie dokie, so you've bought the '${experience}' excursion, at a cost of ${cost && convertToGBP(cost)}\rNice one 🚀`
            );
        }
    };

    const convertToGBP = (cost: number) => {
        return cost.toLocaleString("en-GB", { style: "currency", currency: "GBP" })
    }
    return (
        <li key={id} className="trip-card">
            <h3 className="trip-name grid-col-span-2">{tripName}</h3>
            <p className="trip-description grid-col-span-2">
                {description}
            </p>
            <img
                className="trip-thumbnail"
                src={imageUrl}
                alt={`representation of ${tripName}`}
            />
            <p className="trip-duration">
                Duration: {lengthInDays} day
                {lengthInDays > 1 && "s"}
            </p>
            <p className="trip-price">
                Price:{" "}
                {convertToGBP(cost)}
            </p>
            <button
                className="grid-col-span-2 trip-book-button"
                disabled={!isBookable}
                onClick={(e) => handleClick(e.currentTarget.value)}
                value={`${tripName}/${cost}`}
            >
                {isBookable ? "book now" : "fully booked"}
            </button>
        </li>
    )
}

export default TripCard