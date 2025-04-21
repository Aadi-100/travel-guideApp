import logo from "../assets/images/logo.svg";

export default function Navbar() {
  return (
    <div className="flex items-center flex-col w-screen h-[60px] mt-3">
      <div className="flex justify-between items-center w-[90%] md:w-[85%] h-full">
        <img
          className="w-[115px] h-auto object-contain"
          src={logo}
          alt="Moke Logo"
        />
        <button className="cursor-pointer rounded-sm font-bold h-10 w-24 bg-blue-600 flex items-center justify-center transition-all hover:bg-sky-400">
          <span className="text-white">Button!</span>
        </button>
      </div>
    </div>
  );
}
