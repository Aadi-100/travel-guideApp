import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import placeIco from "../assets/images/place.svg";

type Place = {
  id: number;
  name: string;
  image: string;
  is_featured: boolean;
  description: string;
  category_name: string;
  gallery: { id: number; image: string }[];
  location: string;
};

export default function Place() {
  const [place, setPlace] = useState<Place | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const placeURL = `https://traveller.talrop.works/api/v1/places/view/${id}`;

    fetch(placeURL)
      .then((response) => response.json())
      .then((data) => setPlace(data.data));
  }, [id]);

  if (!place || !place.gallery) {
    return (
      <div className="flex justify-center items-center h-dvh font-bold text-5xl text-sky-100">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen h-[85%] mt-20 cursor-default select-none">
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[85%] flex flex-col">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">{place?.name}</h2>
            <div className="flex items-center mt-2">
              <span className="text-sm border rounded-full px-2 text-gray-400">
                {place.category_name}
              </span>
              <img className="w-[13px] ml-2" src={placeIco} alt="" />
              <span className="text-sm md:text-base ml-1 text-gray-400 font-bold">
                {place.location}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 mt-4 gap-3 w-full">
            <img
              className="col-span-2 row-span-2 rounded-tl-xl w-full h-auto"
              src={place.image}
              alt={place.name}
            />

            <img
              className="col-span-1 row-span-1 w-full h-auto"
              src={place.gallery[0].image}
              alt={place.name}
            />

            <img
              className="col-span-1 row-span-1 md:rounded-tr-xl w-full h-auto"
              src={place.gallery[1].image}
              alt={place.name}
            />

            <img
              className="col-span-1 row-span-1 w-full h-auto"
              src={place.gallery[2].image}
              alt={place.name}
            />

            <img
              className="col-span-1 row-span-1 rounded-br-xl w-full h-auto"
              src={place.gallery[3].image}
              alt={place.name}
            />
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="font-bold text-xl md:text-2xl">Place Details</h3>
            <p className="my-2 text-black">{place.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
