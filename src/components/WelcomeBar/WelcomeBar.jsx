import React from "react";

const WelcomeBar = () => {
  return (
    <>
      <div
        className=""
        style={{
          position: "absolute",
          left: "0%",
          top: "0%",
          width: "22vw",
          height: "90vh",
          backgroundColor: "#ff4000",
          opacity: "0.4",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "3%",
          top: "3%",
          width: "22vw",
          height: "90vh",
        }}
      >
        <h4
          className="m-3"
          style={{ color: "white", borderRadius: "20%", marginTop: "10px" }}
        >
          Welcome,<br></br> Sunil Kushwaha
        </h4>
        <button
          className="text-center m-1 fw-bold "
          style={{
            color: "brown",
            backgroundColor: "white",
            height: "6vh",
            width: "15vw",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px 0px",
            border: "1px solid black",
          }}
        >
          TICKET HISTORY
        </button>
        <button
          className="text-center m-1 fw-bold "
          style={{
            color: "brown",
            backgroundColor: "white",
            height: "6vh",
            width: "15vw",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px 0px",
            border: "1px solid black",
          }}
        >
          CANCELATION
        </button>
        <button
          className="text-center m-1 fw-bold"
          style={{
            color: "brown",
            backgroundColor: "white",
            height: "6vh",
            width: "15vw",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px 0px",
            border: "1px solid black",
          }}
        >
          LOST & FOUND
        </button>
        <button
          className="text-center m-1 fw-bold "
          style={{
            color: "brown",
            backgroundColor: "white",
            height: "6vh",
            width: "15vw",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px 0px",
            border: "1px solid black",
          }}
        >
          SET DEFAULT ROUTE
        </button>
        <button
          className="text-center m-1 fw-bold"
          style={{
            color: "brown",
            backgroundColor: "white",
            height: "6vh",
            width: "15vw",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px 0px",
            border: "1px solid black",
          }}
        >
          CHANGE PASSWORD
        </button>
      </div>
    </>
  );
};

export default WelcomeBar;
