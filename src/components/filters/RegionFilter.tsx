import { useEffect, useState } from "react";

interface RegionFilterProps {
  onFilterChange: (filter: string) => void;
}

function RegionFilter({ onFilterChange }: RegionFilterProps) {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const updatedUrlFilter = `https://restcountries.com/v3.1/${filter}?fields=name,flags,region,capital,population`;
    onFilterChange(updatedUrlFilter);
    console.log(updatedUrlFilter)
  }, [filter, ]);

  const handleRegionChange = (event: any) => {
    setFilter(event.target.value);
  };


  return (
    <div className="flex  max-w-xs pr-12 ">
      <select
        id="selectMenu"
        value={filter}
        onChange={handleRegionChange}
        className=" p-2 mb-4  border border-gray-300 rounded-md focus:outline-none sm:text-sm"
      >
        <option value="all">All</option>
        <option value="region/Africa">Africa</option>
        <option value="region/Asia">Asia</option>
        <option value="region/Europe">Europe</option>
        <option value="region/Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default RegionFilter;
