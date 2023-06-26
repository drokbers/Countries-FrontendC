import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function CountryPage() {
  // const DummyList: example[] = [
  //   {
  //     name: "Turkey",
  //     population: 80234234,
  //     region: "Eurpe",
  //     capital: "Ankara",
  //     flag: "https://flagcdn.com/w320/tr.png",
  //     nativeName: "Turkiye",
  //     subregion: "anadolu",
  //     topLevelDomain: ".tr",
  //     currencies: [
  //       {
  //         code: "TL",
  //       },
  //     ],
  //     languages: [
  //       {
  //         name: "Turkish",
  //       },
  //     ],
  //     borders: ["Iran", "Greek"],
  //   },
  //   {
  //     name: "Turkey2",
  //     population: 80234234,
  //     region: "Eurpe",
  //     capital: "Ankara",
  //     flag: "https://flagcdn.com/w320/tr.png",
  //     nativeName: "Turkiye",
  //     subregion: "anadolu",
  //     topLevelDomain: ".tr",
  //     currencies: [
  //       {
  //         code: "TL",
  //       },
  //     ],
  //     languages: [
  //       {
  //         name: "Turkish",
  //       },
  //     ],
  //     borders: ["Iran", "Greek"],
  //   },
  //   {
  //     name: "Turkey3",
  //     population: 80234234,
  //     region: "Eurpe",
  //     capital: "Ankara",
  //     flag: "https://flagcdn.com/w320/tr.png",
  //     nativeName: "Turkiye",
  //     subregion: "anadolu",
  //     topLevelDomain: ".tr",
  //     currencies: [
  //       {
  //         code: "TL",
  //       },
  //     ],
  //     languages: [
  //       {
  //         name: "Turkish",
  //       },
  //     ],
  //     borders: ["Iran", "Greek"],
  //   },
  //   {
  //     name: "Turkey4",
  //     population: 80234234,
  //     region: "Eurpe",
  //     capital: "Ankara",
  //     flag: "https://flagcdn.com/w320/tr.png",
  //     nativeName: "Turkiye",
  //     subregion: "anadolu",
  //     topLevelDomain: ".tr",
  //     currencies: [
  //       {
  //         code: "TL",
  //       },
  //     ],
  //     languages: [
  //       {
  //         name: "Turkish",
  //       },
  //     ],
  //     borders: ["Iran", "Greek"],
  //   },
  //   {
  //     name: "Turkey5",
  //     population: 80234234,
  //     region: "Eurpe",
  //     capital: "Ankara",
  //     flag: "https://flagcdn.com/w320/tr.png",
  //     nativeName: "Turkiye",
  //     subregion: "anadolu",
  //     topLevelDomain: ".tr",
  //     currencies: [
  //       {
  //         code: "TL",
  //       },
  //     ],
  //     languages: [
  //       {
  //         name: "Turkish",
  //       },
  //     ],
  //     borders: ["Iran", "Greek"],
  //   },
  // ];

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  const generateProducts = () => {
    if (!data) {
      return <span>no data</span>;
    }

    return data.map((country: any) => {
      return <CountryCard key={country.name} country={country} />;
    });
  };

  return (
    <div className="grid grid-cols-1  lg:grid-cols-4   md:grid-cols-2 justify-center place-items-center bg-veryLightGray gap-6 right-6 pl-10 pr-10 ">
      {generateProducts()}
    </div>
  );
}

export default CountryPage;
