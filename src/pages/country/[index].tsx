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
        const decodedIndex = Array.isArray(index) ? index[0].replace(/-/g, ' ') : index.replace(/-/g, ' ');

        const response = await fetch(
          `https://restcountries.com/v3.1/name/${decodedIndex}`
        );

        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
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

  const borderCountries = () => {
    return data.borders?.map((border: any) => {
      return (
        <span
          key={border.id}
          className="p-1 text-xs   shadow-lg dark:bg-darkBlue  bg-veryLightGray rounded  mb-2"
        >
          {border}
        </span>
      );
    });
  };

  function objectToArray(object: any) {
    let array: any = [];
    for (const [key, value] of Object.entries(object)) {
      if (typeof value === "object" && value !== null && "name" in value) {
        array.push(value.name);
      } else if (typeof value === "string") {
        array.push(value);
      }
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


  
  console.log(data.currencies);
  console.log(data);

  if (data?.flags)
    return (
      <Layout loading={loading}>
        <div className="flex flex-col p-2 w-full min-h-screen md:flex-row xs:flex-col justify-center   items-center  ">
          <button
            onClick={returnBackHandler}
            className="flex absolute  w-24 h-8 items-center left-0 top-24 bg-veryLightGray  dark:bg-veryDarkBlue rounded-md shadow-lg hover:bg-lightGray dark:hover:bg-darkBlue m-3 gap-2 justify-center "
          >
            <Image
              src={"/back.png"}
              width={20}
              height={20}
              alt="go back icon"
            />
            <span> Back</span>
          </button>
          <div className="flex lg:flex-row xs:flex-col m-3 absolute  top-48 gap-8">
            <div className="container max-w-lg  ">
              <Image
                src={data.flags.png}
                width={600}
                height={400}
                alt="Picture of the author"
              />
            </div>
            <div id="right" className="grid grid-row-3 max-w-lg  ">
              <h1 className="font-bold text-2xl pb-3 ">{data.name.common}</h1>

              <div id="informations" className="grid grid-cols-2 gap-3 ">
                {descriptionItem("Native Name:", data.altSpellings[1])}
                {descriptionItem(
                  "Population:",
                  data.population.toLocaleString()
                )}
                {descriptionItem("Region:", data.region)}
                {descriptionItem("Sub Region:", data.subregion)}
                {descriptionItem("Capital:", data.capital)}
                {descriptionItem("Top Level Domain:", data.tld[0])}
                {descriptionItem(
                  "Currency:",
                  objectToArray(data.currencies).join(", ")
                )}

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
