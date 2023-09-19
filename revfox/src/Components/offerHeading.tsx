import OfferCard from "./Card";
import background from "../assets/pictures/background.jpg";
import Security from "../assets/png/cyberSecurity.png";

export default function OfferHeader() {
  return (
    <>
      <div
        className="px-4 py-10 "
        style={{ background: `url('${background}')` }}
      >
        <div className="container mx-auto flex flex-col space-y-20 relative">
          {/* Heading */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex items-center justify-center">
              <div className="text-sm font-medium px-4 py-1 bg-blue-100 text-blue-500 rounded-full">
                Best Services
              </div>
            </div>
            {/* Context */}
            <div className=" text-center text-3xl  md:text-[40px] font-semibold max-w-xs md:max-w-3xl mx-auto ">
              Continuously We Offer The Best Services For Progress!
            </div>
          </div>
          {/* Cards */}
          <div className="flex items-center justify-center">
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
              <OfferCard img={Security} heading="Cyber Security" />
              <OfferCard img={Security} heading="Cyber Security" />
              <OfferCard img={Security} heading="Cyber Security" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
