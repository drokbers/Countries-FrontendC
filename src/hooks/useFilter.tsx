import { useState, useEffect } from "react";
import type { Country } from "@/types/country";

const useFilter = (items: Country[]) => {
  const [filteredList, setFilteredList] = useState<Country[]>(items);
  const [searchText, setSearchText] = useState<string>();

  useEffect(() => {
    if (!searchText) {
      setFilteredList(items);
      return;
    }
    console.log("filteredList");

    const filteredItems = items.filter((item) => {
      console.log(item.name);
      const itemName = item.name.common.toLowerCase();
      return itemName.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredList(filteredItems);
  }, [searchText, items]);

  console.log(filteredList)

  return { filteredList, searchText, setSearchText };
};

export default useFilter;
