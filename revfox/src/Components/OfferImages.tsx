import { BsArrowRight } from "react-icons/bs";
interface Props {
  img: string;
}
export default function OfferImage({ img }: Props) {
  return (
    <>
      <div className="relative group overflow-hidden">
        <div className="absolute w-24 h-[1000px] rotate-12 duration-700 -translate-y-32 -translate-x-32
          origin-center bg-slate-50 opacity-30 group-hover:translate-x-[1000px]  z-20"></div>
        <img src={img} alt="" className="duration-300 group-hover:scale-105" />
        <div
          className="absolute bottom-5 duration-300 opacity-0 group-hover:opacity-100 group-hover:bottom-10 left-0 right-0 
        bg-gradient-to-r from-blue-700 to-blue-500 
        p-5 text-white mx-[5%]"
        >
          <div className="w-full h-full flex items-center justify-between">
            <div className="space-y-1.5">
              <h1 className="font-semibold">Cyber Security</h1>
              <p className="uppercase ">it technology</p>
            </div>
            <div className="bg-white px-3 py-2 cursor-pointer">
              <BsArrowRight color="#2563eb" size="24" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
