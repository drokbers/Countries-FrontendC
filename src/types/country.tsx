export type Country = {
  name: {
    common: string;
  };

  population: number;
  region: string;
  capital: string;
  flags: [
    {
      png: string;
    }
  ];
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    }
  };
  languages: [
    {
      name: string;
    }
  ];
  borders: string[];
};
