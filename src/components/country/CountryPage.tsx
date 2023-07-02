import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import RegionFilter from "../filters/RegionFilter";
import FilterInput from "../filters/FilterInput";
import Layout from "../layout";
import useFilter from "@/hooks/useFilter";
import type { Country } from "@/types/country";

function CountryPage() {
  const [data, setData] = useState<Country[]>([]);
  const { filteredList, searchText, setSearchText } = useFilter(data);
  const [regionFilter, setRegionFilter] = useState<string>();

  const fetchData = async () => {
    try {
      let url =
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population";

      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(url);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const generateProducts = () => {
    if (!filteredList || !Array.isArray(filteredList)) {
      return <span>no data</span>;
    }

    return filteredList.map((country: any, index: number) => (
      <CountryCard key={index} country={country} />
    ));
  };

  return (
    <Layout loading={false}>
      <div className="w-full h-full pl-6 pr-6 right-6 ">
        <div className="flex flex-row pt-3 pb-2  justify-between">
          <FilterInput onChange={setSearchText} value={searchText || ""} />

          <RegionFilter onFilterChange={setRegionFilter} />
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-4   md:grid-cols-2 justify-center  gap-6 place-items-center  ">
          {generateProducts()}
        </div>
      </div>
    </Layout>
  );
}

export default CountryPage;
