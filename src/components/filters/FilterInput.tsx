import { useEffect, useState } from "react";

interface SearchFilterProps {
  onChange: (filter: string) => void;
  value: string;
}

const SearchFilter = ({ onChange, value }: SearchFilterProps) => {
  return (
    <div className="flex max-w-xs pl-12">
      <input
        type="text"
        className="w-56 p-2 mb-4 border-lightGray shadow bg-white  dark:border-darkBlue  dark:bg-darkBlue rounded"
        placeholder="Search for a country"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
