import React from 'react';
import CardCharacter from './CardCharacter';


const CharacterList = ({characters, isLoading}) => {
    return (isLoading ? (<img src="https://i.gifer.com/X5NX.gif" alt="loading-gif" style={{width: "45vw"}}/>) : (<div className="card-group">
        
            <div className="row">
            {
                characters.map((character) => (
                    <div key={character.char_id} className="col-6 col-sm-4">
                        <CardCharacter character={character}/>
                    </div>
                ))
            }
            </div>
        
    </div>)
    );
}
export default CharacterList;
