import {useState , useEffect} from "react";

function GetResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      let timeoutWidth = null;
      clearTimeout(timeoutWidth);
      timeoutWidth = setTimeout(() => setWidth(window.innerWidth), 500);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

export default GetResize;