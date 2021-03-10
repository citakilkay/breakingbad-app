
const SearchBar = ({searchCharacter}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="row m-md-5 m-1">
                <div className="col-12 col-sm-12 row">
                    <input type="textarea" onChange={searchCharacter} className="form-control align-items-center col-12 col-sm-9" name="Searcher" placeholder="Search"/>
                </div>
            </div>
        </form>
    )
}
export default SearchBar;