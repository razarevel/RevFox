import { useState, useEffect } from "react";

const useCounter = (inView:boolean)=>{
    let [counts1, setCounts1] = useState(0);
  let [counts2, setCounts2] = useState(0);
  let [counts3, setCounts3] = useState(0);
  let [counts4, setCounts4] = useState(0);
  useEffect(() => {
    if(inView){
    const interval = setInterval(() => {
      if (counts1 < 225) {
        counts1 += 5;
        setCounts1(counts1);
      }
      
      if (counts3 < 220) {
        counts3 += 5;
        setCounts3(counts3);
      }
      if (counts4 < 250) {
        counts4 += 5;
        setCounts4(counts4);
      }
    }, 50);
    const anotherInterval = setInterval(()=>{
      if (counts2 < 109) {
        counts2 += 1;
        setCounts2(counts2);
      }
    },30)

    return () => {
      clearInterval(interval);
      clearInterval(anotherInterval);
    };
}
  }, [inView]);
    const counts = [counts1,counts2,counts3,counts4];
    return counts;
}
export default useCounter;