// SearchBox.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    // Navigate to search page when user starts typing
    navigate(`/catalog?q=${searchQuery}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
