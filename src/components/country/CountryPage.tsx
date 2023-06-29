import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import RegionFilter from "../filters/RegionFilter";
import SearchFilter from "../filters/SearchFilter";

function CountryPage() {
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url =
          "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population";
        if (filter) {
          url = filter;
        }
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [filter]);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const handleSearchChange = (filter: string) => {
    setFilter(filter);
  };
  const generateProducts = () => {
    if (!data || !Array.isArray(data)) {
      return <span>no data</span>;
    }

    return data.map((country: any) => (
      <CountryCard key={country.name} country={country} />
    ));
  };

  return (
    <div className="w-full pl-6 pr-6 right-6  bg-veryLightGray ">
      <div className="flex flex-row pt-3 pb-2 items-center justify-between">
        <SearchFilter onFilterChange={handleSearchChange} />
        <RegionFilter onFilterChange={handleFilterChange} />
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-4   md:grid-cols-2 justify-center  gap-6 place-items-center  ">
        {generateProducts()}
      </div>
    </div>
  );
}

export default CountryPage;
