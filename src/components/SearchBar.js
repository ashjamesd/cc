import React, {useState} from "react";

function SearchBar() {

  const [search, setSearch] = useState('');
  return (
    <div className="search">
      <input value={search} onChange = {(e)=> setSearch(e.target.value)}type="text" className="searchTerm" />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
