import React, { createRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";

export default function Screenshot() {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);
  return (
    <div>
      <div>
        <button style={{ marginBottom: "10px" }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
      <img width={200} src={image} alt={"Screenshot"} />
      <div ref={ref}>
        <h1>ALX Project</h1>
      </div>
    </div>
  );
}
