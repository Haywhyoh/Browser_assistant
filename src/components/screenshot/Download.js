// import React, { useEffect, createRef } from "react";
// import { useScreenshot, createFileName } from "use-react-screenshot";

// export default function Download() {
//   const ref = createRef(null);
//   const [image, takeScreenShot] = useScreenshot();

//   const download = (image, { name = "img", extension = "png" } = {}) => {
//     const a = document.createElement("a");
//     a.href = image;
//     a.download = createFileName(extension, name);
//     a.click();
//   };

//   const getImage = () => takeScreenShot(ref.current);

//   useEffect(() => {
//     if (image) {
//       download(image, { name: "lorem-ipsum", extension: "png" });
//     }
//   }, [image]);

//   return (
//     <div>
//       <button onClick={getImage}>Take screenshot</button>
//       <div ref={ref}></div>
//     </div>
//   );
// }
