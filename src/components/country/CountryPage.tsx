import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import RegionFilter from "../filters/RegionFilter";
import FilterInput from "../filters/FilterInput";
import Layout from "../layout";
import useFilter from "@/hooks/useFilter";
import type { Country } from "@/types/country";

function CountryPage() {
  const [data, setData] = useState<Country[]>([]);
  const {
    filteredList,
    searchText,
    selectedRegion,
    setSelectedRegion,
    setSearchText,
  } = useFilter(data);

  const fetchData = async () => {
    try {
      let url =
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population";

      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
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
      <div className="w-full h-full pl-6 pr-6 right-6 md:px-20">
        <div className="flex flex-col sm:flex-row pt-3 pb-2 justify-between ">
          <FilterInput onChange={setSearchText} value={searchText || ""} />

          <RegionFilter
            onChange={setSelectedRegion}
            value={selectedRegion || ""}
          />
        </div>

        <div className="flex flex-wrap justify-between gap-8">
          {generateProducts()}
        </div>
      </div>
    </Layout>
  );
}

export default CountryPage;
