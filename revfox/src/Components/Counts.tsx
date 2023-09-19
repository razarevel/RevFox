import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
export default function Counts() {
  const { ref, inView } = useInView();
  let [counts, setCounts] = useState(0);
  useEffect(() => {
    if(inView){
    const interval = setInterval(() => {
      if (counts !== 256) {
        counts += 1;
        setCounts(counts);
        console.log(counts);
        console.log(inView)
      }
    }, 5);

    return () => clearInterval(interval);
}
  }, [inView]);

  return (
    <>
    <div className="min-h-screen"></div>
    <div className="min-h-screen"></div>
      <div className="flex space-x-10 items-center justify-center" ref={ref}>
        <div className="text-4xl font-semibold">K</div>
        <div className="text-4xl font-semibold">+</div>
        <div className="text-4xl font-semibold">+</div>
        <div className="text-4xl font-semibold">{counts}K</div>
      </div>
      <div className="min-h-7xl"></div>
    </>
  );
}
