import { useEffect, useState } from 'react';

interface SearchFilterProps {
  onFilterChange: (filter: string) => void;
}

const SearchFilter = ({ onFilterChange }: SearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleSearch = () => {
      if (searchTerm !== '') {
        const updatedUrlFilter = `https://restcountries.com/v3.1/name/${searchTerm}?fields=name,flags,region,capital,population`;
        onFilterChange(updatedUrlFilter);
      }
    };

    const handleKeyUp = () => {
      handleSearch();
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [searchTerm, ]);
  console.log(searchTerm)

  return (
    <div className="flex max-w-xs pl-12">
      <input
        type="text"
        className="w-56 p-2 mb-4 border border-gray-300 rounded"
        placeholder="Search for a country"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
