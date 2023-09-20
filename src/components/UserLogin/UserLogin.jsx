import React, { useState } from "react";
import "./UserLogin.css";
import WelcomeBar from "../WelcomeBar/WelcomeBar";

const UserLogin = () => {

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');


  return (
    <>
      <div
        className="container-fluid homebg m-0 p-0"
        style={{
          border: "1px solid black",
          width: "100%",
          height: "90vh",
          backgroundImage: `url('./home.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WelcomeBar />
        <div style={{ position: "absolute", top: "8vh", left: "34.0vw" }}>
          <input type="text" className="city1" placeholder="From" />

          <div
            style={{
              position: "absolute",
              top: "-4px",
              left: "13.5vw",
              zIndex: "1",
              boxShadow: "0px 0px 10px 0px",
              borderRadius: "50%",
              backgroundColor: "grey",
              border: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="black"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
          <input type="text" className="city2" placeholder="To" />
        </div>
        <div
          className="form-group text-center"
          style={{ position: "absolute", top: "20vh" }}
        >
          <input
            type="text"
            className="form-control text-center fw-bold fs-4"
            style={{ width: "12vw", height: "6vh" }}
          ></input>
          <button
            className="btn btn-primary text-white mt-4 btn-lg fs-5 fw-bold"
            style={{ width: "8vw", height: "5vh", borderRadius: "20px" }}
          ></button>
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            left: "31.5%",
            bottom: "4%",
            width: "35vw",
            height: "47vh",
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              className="text-center m-2 "
              style={{
                color: "black",
                backgroundColor: "white",
                height: "45vh",
                width: "20vw",
                border: "1px solid black",
              }}
            >
              <h6>TICKET ID</h6>
            </div>
            <div
              className="text-center m-2 "
              style={{
                color: "black",
                backgroundColor: "white",
                height: "45vh",
                width: "20vw",
                border: "1px solid black",
              }}
            >
              <h6>PICKUP</h6>
            </div>
            <div
              className="text-center m-2 "
              style={{
                color: "black",
                backgroundColor: "white",
                height: "45vh",
                width: "20vw",
                border: "1px solid black",
              }}
            >
              <h6>DROP</h6>
            </div>
            <div
              className="text-center m-2 "
              style={{
                color: "black",
                backgroundColor: "white",
                height: "45vh",
                width: "20vw",
                border: "1px solid black",
              }}
            >
              <h6>DATE</h6>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "80%",
            top: "5%",
            width: "19vw",
            height: "50vh",
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "8%",
          }}
        >
          <h4
            className="text-center mt-3 mx-3"
            style={{
              color: "black",
              backgroundColor: "orange",
              width: "16.9vw",
              height: "4vh",
              border: "none",
              borderRadius: "15px",
            }}
          >
            OFFERS
          </h4>{" "}
          <div
            className="text-center m-3 "
            style={{
              color: "black",
              backgroundColor: "white",
              height: "10vh",
              width: "17vw",
              boxShadow: "0px 0px 10px 0px",
              border: "1px solid black",
            }}
          ></div>
          <div
            className="text-center m-3 "
            style={{
              color: "black",
              backgroundColor: "white",
              height: "10vh",
              width: "17vw",
              boxShadow: "0px 0px 10px 0px",
              border: "1px solid black",
            }}
          ></div>
          <div
            className="text-center m-3 "
            style={{
              color: "black",
              backgroundColor: "white",
              height: "10vh",
              width: "17vw",
              boxShadow: "0px 0px 10px 0px",
              border: "1px solid black",
            }}
          ></div>
        </div>
        <div
          className=""
          style={{
            position: "absolute",
            left: "79%",
            bottom: "2%",
            width: "20vw",
            height: "32vh",
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "8%",
          }}
        ></div>
        <div style={{ position: "absolute", left: "79.5%", bottom: "20.5%" }}>
          <h4
            className="text-center"
            style={{
              color: "black",
              backgroundColor: "orange",
              width: "18.9vw",
              height: "4vh",
              border: "none",
              borderRadius: "15px",
            }}
          >
            Track My Bus
          </h4>
          <input
            className="form-control mb-4 ms-1"
            style={{
              width: "17vw",
              height: "5vh",
              border: "none",
              borderRadius: "15px",
            }}
            placeholder="enter ticket ID"
          />
          <div style={{ marginLeft: "120px", marginBottom: "-2px" }}>
            <button
              className="btn btn-primary text-white btn-lg fw-bold"
              style={{
                position: "absolute",
                top: "80px",
                width: "3vw",
                height: "6vh",
                border: "none",
                borderRadius: "500px",
              }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
