"use client";
import { useEffect } from "react";

const AdSlot = () => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      {/* Responsive AdSense Slot with reserved space */}
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",       
          minHeight: "250px",  
        }}
        data-ad-client="ca-pub-3026350025047312"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSlot;
