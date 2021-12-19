import React, { useState } from 'react';
import "./Search.scss";
import { SearchInput } from '../../../SearchInput/SearchInput';

export const Search: React.FC<SearchProps> = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="search">
            <SearchInput
                className="search__input"
                value={searchTerm}
                onChange={(ev) => { setSearchTerm(ev.currentTarget.value) }} />
        </div>
    );
}
type SearchProps = {
}
