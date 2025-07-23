import Image from "next/image";
import workingspace from "../../../../components/workingspace.avif";
export default function Detail() {
  return (
    <div className="pt-30 container-custom mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Cafe Domidom</h1>
        <p className="text-gray-600 ml-1">Surabaya, Indonesia</p>
      </div>

      <div className="flex gap-4 mt-10">
        <Image
          className="object-cover object-center w-8/12 h-[400px] rounded-lg"
          src={workingspace}
          alt="workingspace"
        ></Image>
        <div className="grid grid-cols-2 w-4/12 gap-4">
          <Image
            className="object-cover object-center h-full rounded-lg"
            src={workingspace}
            alt="workingspace"
          ></Image>
          <Image
            className="object-cover object-center h-full rounded-lg"
            src={workingspace}
            alt="workingspace"
          ></Image>
          <Image
            className="object-cover object-center h-full rounded-lg"
            src={workingspace}
            alt="workingspace"
          ></Image>
          <Image
            className="object-cover object-center h-full rounded-lg"
            src={workingspace}
            alt="workingspace"
          ></Image>
        </div>
      </div>
      <div className="flex">
        <div className="w-8/12 mr-5">
          <div className="flex gap-3 max-h-[200vh] sticky top-0 bg-white">
            <button className="p-5 border-b-1 border-black text-lg">
              Overiview
            </button>

            <button className="p-5 text-lg">Spaces</button>

            <button className="p-5 text-lg">Services</button>

            <button className="p-5 text-lg">Access</button>
          </div>
          <div className="overview pt-5 w-full">
            Located just a few minutes from the Eiffel Tower, this space offers
            calm, light-filled rooms with a touch of industrial elegance. Ideal
            for teams and solo workers alike, with all the amenities you need to
            stay productive — and inspired.
          </div>
          <div className="spec flex gap-3 mt-5">
            <div className="text-xl text-semibold">240 sqm</div>

            <div className="text-xl text-semibold">40 people</div>

            <div className="text-xl text-semibold">30 desks</div>
          </div>
          <div className="mt-10 text-3xl font-semibold">Spaces</div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="card border rounded-lg p-3">
              <div className="text-lg text-semibold">Hot Desk</div>
              <div className="text-gray-600">Sit anywhere, stay flexible</div>
            </div>

            <div className="card border rounded-lg p-3">
              <div className="text-lg text-semibold">Hot Desk</div>
              <div className="text-gray-600">Sit anywhere, stay flexible</div>
            </div>

            <div className="card border rounded-lg p-3">
              <div className="text-lg text-semibold">Hot Desk</div>
              <div className="text-gray-600">Sit anywhere, stay flexible</div>
            </div>

            <div className="card border rounded-lg p-3">
              <div className="text-lg text-semibold">Hot Desk</div>
              <div className="text-gray-600">Sit anywhere, stay flexible</div>
            </div>
          </div>

          <div className="mt-10 text-3xl font-semibold">Services</div>
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="text-gray-600 text-lg">500 Mbps Wifi</div>
            <div className="text-gray-600 text-lg">Ergonomic Chairs</div>
            <div className="text-gray-600 text-lg">Meeting rooms</div>
            <div className="text-gray-600 text-lg">Barista</div>
            <div className="text-gray-600 text-lg">Kitchen & lounge</div>
            <div className="text-gray-600 text-lg">Wellness room</div>
            <div className="text-gray-600 text-lg">Daily Cleaning</div>
            <div className="text-gray-600 text-lg">24/7 Access</div>
          </div>

          <div className="mt-10 font-semibold text-3xl">Access</div>
          <div className="w-full h-96 mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.207054872949!2d-122.08424968469291!3d37.422065979825105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0e2a7fbb2d3%3A0x9e3b52f36047ed49!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0 rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-4/12">
          <div className="max-w-md mx-auto bg-black text-white rounded-lg p-6 space-y-4 mt-5 max-h-[200vh] sticky top-5">
            <h2 className="text-xl font-semibold text-gray-100">Book a Tour</h2>
            <p className="text-gray-400">Schedule your visit with us</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-gray-300 text-black border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-gray-300 text-black border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full bg-gray-300 text-black border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-gray-300 rounded-full text-black font-semibold py-2 rounded-md transition"
              >
                Schedule Tour
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
