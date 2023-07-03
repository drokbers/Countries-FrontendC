import { useState, useEffect } from "react";
import type { Country } from "@/types/country";

const useFilter = (items: Country[]) => {
  const [filteredList, setFilteredList] = useState<Country[]>(items);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  useEffect(() => {
    if (!searchText && !selectedRegion) {
      setFilteredList(items);
      return;
    }

    const filteredItems = items.filter((item) => {
      const itemName = item.name.common.toLowerCase();
      const itemRegion = item.region.toLowerCase();
      return (
        itemName.includes(searchText.toLowerCase()) &&
        itemRegion.includes(selectedRegion.toLowerCase())
      );
    });

    setFilteredList(filteredItems);
  }, [searchText, selectedRegion, items]);

  return {
    filteredList,
    searchText,
    selectedRegion,
    setSelectedRegion,
    setSearchText,
  };
};

export default useFilter;
