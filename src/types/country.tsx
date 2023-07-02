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
  currencies: [
    {
      code: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  borders: string[];
};
