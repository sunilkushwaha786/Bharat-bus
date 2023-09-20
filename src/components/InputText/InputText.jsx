import React from "react";
import "./InputText.css";
import Deals from "../Deals/Deals";

const InputText = () => {
  return (
    <>
      <div
        className="container text-center "
        style={{
          position: "absolute",
          top: "10vh",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          className="form-group text-center"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "inline-block",
          }}
        >
          <input
            type="text"
            className="form-control mb-5"
            style={{
              width: "20vw",
              height: "10vh",
              border: "12px solid grey",
              borderRadius: "15px",
            }}
            placeholder="From"
          />
          <div
            style={{
              position: "absolute",
              top: "8vh",
              left: "41vw",
              zIndex: "1",
              boxShadow: "0px 0px 10px 0px",
              borderRadius: "50%",
              backgroundColor: "grey",
              border: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
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
          <input
            type="text"
            className="form-control mb-5"
            style={{
              width: "20vw",
              height: "10vh",
              border: "12px solid grey",
              borderRadius: "15px",
            }}
            placeholder="To"
          />
        </div>
        <div
          className="form-group text-center"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <input
            type="text"
            className="form-control text-center fw-bold fs-4"
            style={{ width: "12vw", height: "6vh", borderRadius: "10px" }}
            value="04-08-2023"
          />
        </div>
        <div
          className="form-group text-center"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <button
            className="btn btn-primary text-white mt-4 btn-lg fs-5 fw-bold"
            style={{ width: "8vw", borderRadius: "20px" }}
          >
            SEARCH
          </button>
        </div>

        <div
          className="form-group text-center"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <button
            className="btn btn-light text-primary btn-lg fw-bold"
            style={{ marginTop: "15vh", borderRadius: "20px" }}
          >
            Explore Our Routes
          </button>
        </div>
      </div>

      <Deals />
    </>
  );
};

export default InputText;
