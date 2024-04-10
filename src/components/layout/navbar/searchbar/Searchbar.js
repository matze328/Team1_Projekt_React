
import styles from "./Searchbar.module.css";
import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={styles.mainContainer}> 
                  <input 
                  className={styles.input}
                type="text"
                placeholder="Suche..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
