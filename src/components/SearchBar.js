const SearchBar = (props) => {
  const { searchBar, handleSearchBar } = props;
  return (
    <div className="search-bar-wrapper">
      <form className="search-form">
        <input
          name="input"
          type="text"
          value={searchBar}
          placeholder="Search"
          onChange={(event) => {
            handleSearchBar(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
