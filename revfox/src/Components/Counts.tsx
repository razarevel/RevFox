import { useInView } from "react-intersection-observer";
import useCounter from "../hooks/useCounter";
import CompleteProject from "../assets/png/complete project.png";
import NationAward from "../assets/png/nationalAwrd.png";
import TeamMember from "../assets/png/award.png";
import HappyClient from "../assets/png/happyClient.png";
export default function Counts() {
  const { ref, inView } = useInView();
  const Counts = useCounter(inView);

  return (
    <>
      <div
        className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 
      lg:space-x-10 items-start md:items-center justify-center font-Roboto m-4"
        ref={ref}
      >
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-12 items-center justify-between">
          {/* First */}
          <div className="flex items-center justify-center space-x-5">
            {/* Pic */}
            <div className="px-3 py-2 bg-slate-50">
              <img src={CompleteProject} alt="" className="w-11" />
            </div>
            {/* Context */}
            <div className="flex flex-col">
              <div className="text-2xl  lg:text-5xl font-bold">
                {Counts[0]}K
              </div>
              <h1>Complete Project</h1>
            </div>
          </div>
          {/* Second */}
          <div className="flex items-center justify-center space-x-5">
            {/* Pic */}
            <div className="px-3 py-2 bg-slate-50">
              <img src={NationAward} alt="" className="w-11" />
            </div>
            {/* Context */}
            <div className="flex flex-col">
              <div className="text-2xl  lg:text-5xl font-bold">
                {Counts[1]}+
              </div>
              <h1>National Award</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16 items-center justify-center">
          {/* Third */}
          <div className="flex items-center justify-center space-x-5">
            {/* Pic */}
            <div className="px-3 py-2 bg-slate-50">
              <img src={TeamMember} alt="" className="w-11" />
            </div>
            {/* Context */}
            <div className="flex flex-col">
              <div className="text-2xl  lg:text-5xl font-bold">
                {Counts[2]}+
              </div>
              <h1>Team Members</h1>
            </div>
          </div>
          {/* Fourth */}
          <div className="flex items-center justify-center space-x-5">
            {/* Pic */}
            <div className="px-3 py-2 bg-slate-50">
              <img src={HappyClient} alt="" className="w-11" />
            </div>
            {/* Context */}
            <div className="flex flex-col">
              <div className="text-2xl  lg:text-5xl font-bold">
                {Counts[3]}K
              </div>
              <h1>Happy Client</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
