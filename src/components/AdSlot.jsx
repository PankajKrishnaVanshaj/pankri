"use client"
import { useEffect } from "react";

const AdSlot = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      {/* Responsive AdSense Slot */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3026350025047312"
        data-ad-slot="YOUR_AD_SLOT_ID"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSlot;
