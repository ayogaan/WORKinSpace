import Image from "next/image";
import workingspace from "@/components/workingspace.avif";

export default function Location() {
  return (
    <div className="container-custom mx-auto pt-30">
      <div className="flex flex-col gap-3">
        <div className="text-3xl">Our Location</div>
        <p className="text-md text-gray-600">
          From the heart of the city to calmer corners, our co workingspaces
          <br></br>are designed to keep you productive, connected and inspired
        </p>
        <div>
          <input
            type="text"
            placeholder="Search by city, name ..."
            className="text-gray-800 py-2 px-3 border border-graay-600 rounded-lg"
          ></input>
        </div>
        <div className="flex gap-3 mt-5">
            <button className="text-white bg-black border rounded-lg px-2 py-1"> all </button>
            <button className="text-black bg-gray-200 rounded-lg px-2 py-1"> Semarang </button>
            <button className="text-black bg-gray-200 rounded-lg px-2 py-1"> Yogyakarta </button>
            <button className="text-black bg-gray-200 rounded-lg px-2 py-1"> Surabaya </button>
        
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 jusify-around mt-10">
        <div className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </div>

        <div className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </div>

        <div className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </div>

        <div className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </div>

        <div className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </div>

        <div className="flex-1 relative basis-1/3 bg-white shadow rounded-xl p-4 flex">
          <div className=" w-full h-[428px]">
            <Image
              className="object-cover object-center rounded-lg"
              src={workingspace}
              alt="workingspace"
              fill={true}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white ">
            <h2 className="text-lg font-semibold">Semarang</h2>
            <p className="text-gray-200">
              6 Av. du Général Lemonnier, 75001 Paris.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-5 p-4 h-64 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
