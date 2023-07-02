import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface CountryCardProps {
  country: {
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
    flags: {
      png: string;
    };
    nativeName: string;
    subregion: string;
    topLevelDomain: string;
    currencies: {
      code: string;
    }[];
    languages: {
      name: string;
    }[];
    borders: string[];
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const router = useRouter();

  const detailHandler = (): void => {
    router.push(`/country/${country.name.common}`);
  
  };

  const descriptionItem = (title: string, value: string) => {
    return (
      <span>
        <span className="font-semibold">{title}</span> {value}
      </span>
    );
  };

  return (
    <div
      className="container h-80 w-56 relative border-spacing-1  border   dark:border-darkBlue  bg-white  dark:bg-darkBlue"
      onClick={detailHandler}
    >
      <div className=" h-28 w-56">
        <Image
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="flex flex-col  gap-1 pl-2 m-4">
        <h2 className="font-bold text-lg  h-14 ">{country.name.common}</h2>
        {descriptionItem("Population:", country.population.toLocaleString())}
        {descriptionItem("Region:", country.region)}
        {descriptionItem("Capital:", country.capital)}
      </div>
    </div>
  );
};

export default CountryCard;
