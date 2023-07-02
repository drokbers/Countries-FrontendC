import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";

function DetailPage() {
  const router = useRouter();
  const { index } = router.query;
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const returnBackHandler = () => {
    router.back();
  };

  useEffect(() => {
    if (!index) return;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${index}`
        );

        if (!response.ok) {
          throw new Error("Request failed with status " + response.status)
        }

        const data = await response.json();
        setData(data[0]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    setLoading(true);

    fetchData();
  }, [index]);

  //make map for fetch borders in data
  if (data.length) console.log(data.currencies);

  const borderCountries = () => {
    return data.borders?.map((border: any) => {
      return (
        <span className="p-1 text-xs rounded\ mb-2">
          {border}
        </span>
      );
    });
  };

  function objectToArray(object: any) {
    let array: any = [];
    for (const [key, value] of Object.entries(object)) {
      array.push(value);
    }
    return array;
  }

  const descriptionItem = (title: string, value: string) => {
    return (
      <span>
        <span className="font-semibold">{title}</span> {value}
      </span>
    );
  };

  if (data?.flags)
    return (
      <Layout loading={loading}>
        <div className="flex flex-col p-2 w-full   left-10 md:flex-row sm:flex-col justify-center  items-center  gap-8">
          <button
            onClick={returnBackHandler}
            className="flex mdabsolute   w-24 left-24 top-32 bg-veryLightGray  dark:bg-veryDarkBlue rounded-md shadow-lg hover:bg-lightGray  gap-2 justify-center "
          >
            <Image
              src={"/back.png"}
              width={20}
              height={20}
              alt="go back icon"
            />
            <span> Back</span>
          </button>
          <div className="flex flex-row absolute top-48">
          <div className="container max-w-lg sm:mt-72  md:mt-0 ">
            <Image
              src={data.flags.png}
              width={600}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div id="sag" className="grid grid-row-3 gap-3  max-w-lg ">
            <h1 className="font-bold text-2xl pb-5">{data.name.common}</h1>

            <div id="bilgiler" className="grid grid-cols-2 gap-3 ">
              {descriptionItem("Native Name:", data.altSpellings[1])}
              {descriptionItem("Population:", data.population)}
              {descriptionItem("Region:", data.region)}
              {descriptionItem("Sub Region:", data.subregion)}
              {descriptionItem("Capital:", data.capital)}
              {descriptionItem("Top Level Domain:", data.tld[0])}

              {descriptionItem(
                "Languages:",
                objectToArray(data.languages).join(", ")
              )}
            </div>
            <div className="flex flex-wrap gap-1 items-start">
              <span className=" whitespace-nowrap mr-2">
                <b>Border Countries:</b>
              </span>
              {borderCountries()}
            </div>
          </div>
          </div>

        </div>
      </Layout>
    );
}

export default DetailPage;
