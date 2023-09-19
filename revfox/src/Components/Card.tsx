interface Props {
  img: string;
  heading: string;
  link?: string;
}
export default function OfferCard({ img, heading, link }: Props) {
  return (
    <>
      <div className="flex flex-col px-4 py-6 bg-white shadow-lg space-y-6  group relative hover:text-white">
        <div className="z-10 absolute top-0 right-0 bottom-0 left-0 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-blue-600 duration-300 opacity-0 group-hover:opacity-100"></div>
        {/* PNG */}
        <div className=" bg-slate-50 w-24 p-4 rounded-full duration-300 group-hover:bg-white z-20">
          <img src={img} alt="" className="" />
        </div>
        {/* Heading */}
        <div className="z-20 duration-300 space-y-3">
          <h1 className="text-2xl font-semibold">{heading}</h1>
          <p className="text-md opacity-80">
            Phasellus aliquam fermentum tincidunt. Duis accumsan,
          </p>
        </div>
        {/* Border */}
        <div className="mx-4 z-20">
          <div className="border-b"></div>
        </div>
        {/* Link */}
        <a
          href={link || "#"}
          className="z-20 uppercase font-medium duration-300"
        >
          Read more
        </a>
      </div>
    </>
  );
}
