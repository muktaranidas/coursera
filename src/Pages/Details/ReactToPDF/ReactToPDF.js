import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";

const ReactToPDF = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("print success"),
  });
  return (
    <>
      <div ref={componentRef} style={{ width: "100%", height: "100%" }}></div>
      <Button onClick={handlePrint}>Get premium access</Button>
    </>
  );
};

export default ReactToPDF;
