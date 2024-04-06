// import React, { useEffect, useRef } from "react";
// import { toast } from "react-toastify";

// const ClientRoom = ({ userNo, socket, setUsers, setUserNo }) => {
//   const imgRef = useRef(null);
//   useEffect(() => {
//     socket.on("message", (data) => {
//       toast.info(data.message);
//     });
//   }, []);
//   useEffect(() => {
//     socket.on("users", (data) => {
//       setUsers(data);
//       setUserNo(data.length);
//     });
//   }, []);
//   useEffect(() => {
//     socket.on("canvasImage", (data) => {
//       imgRef.current.src = data;
//     });
//   }, []);

//   return (
//     <div className="container-fluid">
//       <div className="row pb-2 " style={{ background: "black" }}>
//         <h1 className="display-5 pt-4 pb-3 text-center">
//           Collaborative White Board{" "}
//           <span className="btn btn-danger btn-sm">users online: {userNo}</span>
//         </h1>
//       </div>

//       <div className="row mt-5">
//         <div
//           className="col-md-8 overflow-hidden border border-dark px-0 mx-auto
//           mt-3"
//           style={{ height: "500px" }}
//         >
//           <img className="w-100 h-100" ref={imgRef} src="" alt="image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientRoom;

import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const ClientRoom = ({ userNo, socket, setUsers, setUserNo }) => {
  const imgRef = useRef(null);
  const downloadRef = useRef(null);

  useEffect(() => {
    socket.on("message", (data) => {
      toast.info(data.message);
    });
  }, []);

  useEffect(() => {
    socket.on("users", (data) => {
      setUsers(data);
      setUserNo(data.length);
    });
  }, []);

  useEffect(() => {
    socket.on("canvasImage", (data) => {
      imgRef.current.src = data;
    });
  }, []);

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const imgElement = imgRef.current;

    canvas.width = imgElement.width;
    canvas.height = imgElement.height;

    context.drawImage(imgElement, 0, 0);

    const downloadLink = document.createElement("a");
    downloadLink.download = "canvas_image.png";
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.click();
  };

  return (
    <div className="container-fluid">
      <div className="row pb-2 " style={{ background: "black" }}>
        <h1 className="display-5 pt-4 pb-3 text-center">
          Collaborative White Board{" "}
          <span className="btn btn-danger btn-sm">users online: {userNo}</span>
        </h1>
      </div>

      <div className="row mt-5">
        <div
          className="col-md-8 overflow-hidden border border-dark px-0 mx-auto mt-3"
          style={{ height: "500px" }}
        >
          <img className="w-100 h-100" ref={imgRef} src="" alt="image" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8 mx-auto text-center">
          <button className="btn btn-primary" onClick={handleDownload}>
            Download Canvas
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientRoom;
