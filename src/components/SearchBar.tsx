import React from "react";

interface ISearchBar {
  searchBar: string;
  handleSearchBar: (value: string) => void;
}
export const SearchBar: React.FC<ISearchBar> = (props) => {
  const { searchBar, handleSearchBar } = props;
  // props are searchbar and handle searchbar
  return (
    <div className="search-bar-wrapper">
      <form className="search-form">
        <input
          name="input"
          type="text"
          value={searchBar}
          style={{
            backgroundColor: "white",
            width: "100%",
          }}
          // value equals searchbar
          placeholder="Search"
          onChange={(event) => {
            handleSearchBar(event.target.value);
          }}
          // onchange takes event and the function is handlesearchbar takes event targetvalue
        />
      </form>
    </div>
  );
};
