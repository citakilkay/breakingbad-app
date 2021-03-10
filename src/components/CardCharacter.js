const CardCharacter = ({ character }) => {
    var googleSearch = "https://www.google.com/search?q=" + `${character.name}`;
    return (

        <a className="card my-5" href={googleSearch} target="_blank" rel= "noopener noreferrer">
            <div className="card-inner">
                <div className="card-front">
                    <img className="card-image" src={character.img} alt={character.name} />
                </div>
                <div className="card-back mt-3 px-1">
                    <h3 className="my-2">{character.name}</h3>
                    <p className="my-1"><strong className="text-title">Played By: </strong>{character.portrayed}</p>
                    <p className="my-1"><strong className="text-title">Nick Name: </strong>{character.nickname}</p>
                    <p className="my-1"><strong className="text-title">Occupation: </strong>{character.occupation}</p>
                    <p className="my-1"><strong className="text-title">Status: </strong>{character.status}</p>
                    <p className="my-1"><strong className="text-title">Birthday: </strong>{character.birthday}</p>
                </div>
            </div>
        </a>

    );
}
export default CardCharacter;