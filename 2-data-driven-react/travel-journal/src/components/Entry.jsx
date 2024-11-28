export default function Entry(props) {
    return (
        <article className="card">
            <div className="img-container">
                <img
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="information">
                <div className="location">
                    <img
                        src="../src/assets/location.svg"
                        alt="location icon"
                        className="location-icon"
                    />
                    <span className="country">
                        {props.country.toUpperCase()}
                    </span>
                    <a
                        href={props.googleMapsLink}
                        className="link"
                    >
                        View on Google Maps
                    </a>
                </div>
                <h2 className="place">{props.title}</h2>
                <p className="date">{props.dates}</p>
                <p className="description">{props.text}</p>
            </div>
        </article>
    )
}
