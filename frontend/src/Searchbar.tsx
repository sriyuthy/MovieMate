import {Search} from 'lucide-react'
import { useCallback, useEffect, useState, type SetStateAction } from 'react';

const sampleData = [
    {
        id: 1,
        title: 'Shawshank Redemption',
    },
    {
        id: 2,
        title: 'Cure',
    },
    {
        id: 3,
        title: 'Mulholland Drive',
    },
    {
        id: 4,
        title: 'Good Morning',
    },
];
    

export const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    type Item = {
        id: number,
        title: string
    }

    const [searchResults, setSearchResults] = useState<Item[]>([]);

    const debounce = (func: (arg0: any) => any, delay: number | undefined) => {
        let timeoutId: number | undefined;
        return (...args: [any]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay)
        }

    }

    const handleSearch = useCallback(
        debounce((term) => {
            if (term.trim() === '') {
                setSearchResults([]);
            } else {
                const results = sampleData.filter((item) => 
                    item.title.toLowerCase().includes(term.toLowerCase()),
                )
                setSearchResults(results);
            }
        }, 300),
        [],
    )

    useEffect(() => {
        handleSearch(searchTerm)
    }, [searchTerm, handleSearch])

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value)
    }

    return (
    <div className="page-container">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="search-form"
      >
        <div className="search-wrapper">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
            placeholder="Search for a movie"
          />
          <div className="search-icons">
            <button type="submit" className="search-button">
              <Search size={25} />{' '}
            </button>{' '}
          </div>{' '}
        </div>{' '}
      </form>{' '}
      {searchResults.length > 0 && (
        <div className="results-container">
          <h2 className="results-title"> Search Results: </h2>{' '}
          <ul>
            {' '}
            {searchResults.map((result) => (
              <li key={result.id} className="result-item">
                <a
                  className="result-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  {result.title}{' '}
                </a>{' '}
              </li>
            ))}{' '}
          </ul>{' '}
        </div>
      )}{' '}
    </div>
  )

}