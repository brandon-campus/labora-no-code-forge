import React, { useEffect, useState } from "react";
import { getStoredUtmsQueryString } from "@/hooks/useUtm";

const Aplicar = () => {
  const [tallyUrl, setTallyUrl] = useState("https://tally.so/r/q4QzOd?transparentBackground=1&formEventsForwarding=1");

  useEffect(() => {
    // Agregar UTMs a la URL si existen
    const utms = getStoredUtmsQueryString();
    if (utms) {
      setTallyUrl(`https://tally.so/r/q4QzOd?transparentBackground=1&formEventsForwarding=1&${utms}`);
    }

    // Ensure Tally script is loaded
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden", background: "#0a0b0d" }}>
      <iframe
        data-tally-src={tallyUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Linkinbio-Pre-inscritos-bootcamp"
        style={{ position: "absolute", top: 0, left: 0, border: 0, right: 0, bottom: 0 }}
        allow="camera; microphone; autoplay; encrypted-media;"
      />
    </div>
  );
};

export default Aplicar;