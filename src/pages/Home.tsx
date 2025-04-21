import { useEffect, useState } from "react";
import placeIco from "../assets/images/place.svg";
import { useNavigate } from "react-router-dom";

type Places = {
  id: number;
  name: string;
  location: string;
  image: string;
  is_featured: boolean;
};

export default function Home() {
  const navigate = useNavigate();
  const [places, setPlaces] = useState<Places[]>([]);

  useEffect(() => {
    const placesURL = "https://traveller.talrop.works/api/v1/places/";

    fetch(placesURL)
      .then((response) => response.json())
      .then((data) => setPlaces(data.data));
  }, []);

  return (
    <div className="flex justify-center mt-24">
      <div className="w-[85%] flex flex-col">
        <h2 className="text-3xl font-bold">Welcome</h2>
        <p className="mt-3 text-gray-200 font-bold">
          Explore the world around you
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {places.map((i) => (
            <li key={i.id}>
              <div
                className="select-none cursor-pointer"
                onClick={() => navigate(i.id.toString())}
              >
                <img
                  className="rounded-t-xl w-full mx-auto"
                  src={i.image}
                  alt={i.name}
                />
                <div className="ml-2 mt-1">
                  <h2 className="font-bold">{i.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <img className="w-[13px]" src={placeIco} alt="Location" />
                    <p className="text-black">{i.location}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
