"use client";
import { QRCodeStyling } from "@liquid-js/qr-code-styling";
import { useEffect, useRef, useState } from "react";

const QRCodePage = ({ patientID }) => {
  const options = {
    data: `https://localhost:3000/dashboard/patient/${patientID.patientID}`,
    image: "/images/logo/logo_1.svg",
    dotsOptions: {
      color: "#0F5CEC",
      size: 4,
      type: "small-square",
    },
    backgroundOptions: {
      color: "#e9ebee",
      margin: 1,
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 1,
      imageSize: 0.5,
    },
    cornersSquareOptions: {
      color: "#0D54D8",
      type: "extra-rounded",
    },
    cornersDotOptions: {
      color: "#F50C0C",
      type: "dot",
    },
  };

  const [qrCode] = useState(new QRCodeStyling(options));
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  return <div ref={ref} className="p-1 rounded border m-2"></div>;
};

export default QRCodePage;
