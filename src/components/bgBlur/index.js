import React,{useEffect,useCallback} from "react";

export const BgBlob = () => {

  const setFromEvent = useCallback((e) => { 
    let loopStarted = false;

    if (!loopStarted) {
      loop();
      loopStarted = true;
    }
  },[]);

  const loop = () => {
    
    const shape = document.getElementById("blob-id");
    window.onpointermove = event => { 
      const { pageX, pageY } = event;
      
      shape.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
      }, { duration: 3000, fill: "forwards" });
    }}    
    useEffect(() => {
        window.addEventListener("mousemove", setFromEvent);

        return () => {
        window.removeEventListener("mousemove", setFromEvent);
        };
    }, [setFromEvent]);


  return (
    <div className="container-div">
      <div id={"blob-id"} className="bg-blob">
      </div>
    </div>
  );
};

