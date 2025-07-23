export default function Sidebar() {
  return (
    <div className="right-0 top-0 z-10 absolute h-full w-full flex">
      <div className="w-1/2 border bg-black/50 backdrop-blur-md"></div>
      <div className="w-1/2 border bg-white">
        <div className="flex flex-col h-full">
          <div className="p-3 bg-gray-200 text-gray-700 font-semibold">
            Admin
          </div>
        </div>
      </div>
    </div>
  );
}
