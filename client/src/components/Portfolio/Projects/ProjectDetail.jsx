import ImageToggleOnScroll from './ImageToggleOnScroll.jsx';

const SpeakerDetail = ({
    id,
    firstName,
    lastName,
    favorite,
    overview,
    onHeartFavoriteHandler
}) => {
    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll  
                className="card-img-top"
                primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
                secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
                alt={`${firstName} ${lastName}`}
            />
            <div className="card-body">
                <h4 className="card-title">
                    <button 
                        data-sessionid={id}
                        className={`${favorite ? "heartbutton" : "heartdarkbutton"}`}
                        onClick={e => {
                            onHeartFavoriteHandler(e, !favorite)
                        }} 
                    />
                    <span>
                        {firstName} {lastName}
                    </span>
                </h4>
                <span>
                    {overview}
                </span>
            </div>
        </div>
    )
};

export default SpeakerDetail;