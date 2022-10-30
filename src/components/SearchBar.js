export const SearchBar = (props) => {
  const { searchBar, handleSearchBar } = props;
  // props are searchbar and handle searchbar
  return (
    <div className="search-bar-wrapper">
      <form className="search-form">
        <input
          name="input"
          type="text"
          value={searchBar}
          style={{ width: "300px", marginLeft: "-50px" }}
          //value equals searchbar
          placeholder="Search"
          onChange={(event) => {
            handleSearchBar(event.target.value);
          }}
          //onchange takes event and the function is handlesearchbar takes event targetvalue
        />
      </form>
    </div>
  );
};
