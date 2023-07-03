interface RegionFilterProps {
  value: string;
  onChange: (region: string) => void;
}

function RegionFilter({ onChange, value }: RegionFilterProps) {
  return (
    <div className="flex p-2 mb-4 border border-gray-300  dark:border-darkBlue  dark:bg-darkBlue  rounded-md sm:text-sm">
      <select
        id="selectMenu"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent focus:outline-none w-full"
      >
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default RegionFilter;
