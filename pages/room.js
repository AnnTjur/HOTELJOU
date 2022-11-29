import { Navbar } from "flowbite-react";
import Image from "next/image";
import mountains from "../public/buy.jpg";

export default function Home() {
  return (
    <>
      <nav class="flex items-center justify-center flex-wrap bg-white p-6">
        <div class="flex items-center justify-center flex-shrink-0 text-black mr-6">
          <span class="font-semibold text-xl tracking-tight">ZALL HOTEL</span>
        </div>
      </nav>

      <div className="mx-auto relative">
        <Image src={mountains} className="static bg-cover" />
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex flex-col">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-center leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              Single Bad Room
            </h1>
            <p class="mb-6 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 xl:px-48 text-center dark:text-gray-400"></p>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </>
  );
}
