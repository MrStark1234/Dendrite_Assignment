import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "./joincreate.css";
import pic from "../src/assets/pic.png";

const JoinCreateRoom = ({ uuid, setUser, setRoomJoined }) => {
  const [roomId, setRoomId] = useState(uuid());
  const [name, setName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinRoomId, setJoinRoomId] = useState("");

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!name) return toast.dark("Please enter your name!");

    setUser({
      roomId,
      userId: uuid(),
      userName: name,
      host: true,
      presenter: true,
    });
    setRoomJoined(true);
  };
  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (!joinName) return toast.dark("Please enter your name!");

    setUser({
      roomId: joinRoomId,
      userId: uuid(),
      userName: joinName,
      host: false,
      presenter: false,
    });
    setRoomJoined(true);
  };

  return (
    <div className="main-container">
      <div className="blur-circle1"></div>
      <div className="blur-circle2"></div>

      <div className="landing-page">
        <header>
          <div className="container">
            <a href="/" className="logo">
              Starks <b>Collaborative-White Board</b>
            </a>
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Are You Looking For Collaborate in Creation ?.</h1>
              <p>
                So you are in the right place. In this webiste you can draw and
                write something with your friends, share ideas or just have fun
                We are a platform that allows you to create, collaborate and
                share your ideas with others. Join us today!
              </p>

              <div className="frm">
                <form onSubmit={handleCreateSubmit}>
                  <h3 className="mt-4 label">Create Room</h3>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-group my-2  align-items-center">
                    <input
                      type="text"
                      className="form-control border-0 outline-0"
                      value={roomId}
                      readOnly={true}
                      style={{
                        boxShadow: "none",
                        zIndex: "0 !important",
                        fontsize: "0.89rem !important",
                      }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-primary  border-0 btn-sm px-1 py-1 my-auto mx-1"
                        type="button"
                        onClick={() => setRoomId(uuid())}
                      >
                        Generate
                      </button>
                      &nbsp;&nbsp;
                      <CopyToClipboard
                        text={roomId}
                        onCopy={() =>
                          toast.success("Room Id Copied To Clipboard!")
                        }
                      >
                        <button
                          className="btn btn-outline-dark border-0 btn-sm px-1 py-1 my-auto"
                          type="button"
                        >
                          Copy
                        </button>
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div className="form-group mt-5">
                    <button
                      type="submit"
                      className="form-control btn btn-dark py-2"
                    >
                      Create Room
                    </button>
                  </div>
                </form>
                <form onSubmit={handleJoinSubmit}>
                  <h3 className="mt-4 label">Join Room</h3>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      value={joinName}
                      onChange={(e) => setJoinName(e.target.value)}
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control outline-0"
                      value={joinRoomId}
                      onChange={(e) => setJoinRoomId(e.target.value)}
                      placeholder="Room Id"
                      style={{
                        boxShadow: "none",
                      }}
                    />
                  </div>
                  <div className="form-group mt-5">
                    <button
                      type="submit"
                      className="form-control btn btn-dark py-2"
                    >
                      Join Room
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="image">
              <img className="main-image" src={pic} alt="Main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateRoom;
