import React, { useState } from "react";

const more = () => {
  const [data, setdata] = useState();
  const [watch, setwatch] = useState(false);
  const [link, setlink] = useState();

  const fetchdata = async (Mov) => {
    const responce = await fetch(
      `https://www.omdbapi.com/?t=${Mov}&plot=full&apikey=857db68`
    );
    setdata(await responce.json());
    console.log(data);
  };

  return (
    <div className="p-3">
      <h1 className="text-white font-bold">Top Picks</h1>
      <hr />
      <br />
      <div className="postercon flex justify-evenly overflow-visible flex-wrap gap-4">
        <img
          src="https://demo.themeies.com/XiroStreming-html/assets/images/movie/m-image-01.jpg"
          onClick={() => {
            fetchdata("Avengers: Endgame"),
              setlink(
                "https://www.youtube.com/embed/TcMBFSGVi1c?si=us_bfHoYgYymLkRh"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />
        <img
          src="https://demo.themeies.com/XiroStreming-html/assets/images/movie/m-image-04.jpg"
          onClick={() => {
            fetchdata("Joker"),
              setlink(
                "https://www.youtube.com/embed/zAGVQLHvwOY?si=4rDlXCeQR1FYybbs"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />
        <img
          src="https://demo.themeies.com/XiroStreming-html/assets/images/movie/m-image-02.jpg"
          onClick={() => {
            fetchdata("The Lord of the Rings"),
              setlink(
                "https://www.youtube.com/embed/c9fsBy45YTQ?si=Q49ZG9aFmNZYqV1c"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />
        <img
          src="https://demo.themeies.com/XiroStreming-html/assets/images/movie/m-image-03.jpg"
          onClick={() => {
            fetchdata("Star Wars"),
              setlink(
                "https://www.youtube.com/embed/Q0CbN8sfihY?si=-_ZHP2Rb_q6UcnP1"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />
        <img
          src="https://demo.themeies.com/XiroStreming-html/assets/images/movie/m-image-08.jpg"
          onClick={() => {
            fetchdata("John Wick"),
              setlink(
                "https://www.youtube.com/embed/ESdjrs67qEM?si=U-IN3W5igTwqzMDB"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />
        <img
          src="https://demo.themeies.com/XiroStreming-html/assets/images/movie/m-image-05.jpg"
          onClick={() => {
            fetchdata("Spider-Man: Into the Spider-Verse"),
              setlink(
                "https://www.youtube.com/embed/g4Hbz2jLxvQ?si=l5R7pdncFG2Lsllv"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />
        <img
          src=""
          onClick={() => {
            fetchdata("Spider-Man: Into the Spider-Verse"),
              setlink(
                "https://www.youtube.com/embed/g4Hbz2jLxvQ?si=l5R7pdncFG2Lsllv"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />
        <img
          src="data:image/jpeg;base64,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"
          onClick={() => {
            fetchdata("Journey 2: The Mysterious Island"),
              setlink(
                "https://drive.google.com/file/d/10Xaw14f9EHONb0AQu6mEPA8Ksh2xPZXZ/preview"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />

        <img
          src="https://resizing.flixster.com/R-Ccjtwqrl32l3CCbKyI87CRQtE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I0NTAzYzRjLWI4YjEtNDY5OS04ZmJkLTdlOTAwMGFiNzAyNi5qcGc="
          onClick={() => {
            fetchdata("Gangnam Zombie"),
              setlink(
                "https://drive.google.com/file/d/1--zcyINToqD0sL5fCa352aOdEc5JW7CN/preview"
              );
          }}
          className="h-[45vh] cursor-pointer posteritem"
          alt=""
        />
      </div>

      {data ? (
        <div className="floating-box">
          <button className=" absolute right-3" onClick={() => setdata()}>
            X
          </button>
          <h1 className=" font-extrabold text-xl">
            {data.Title}({data.Year})
          </h1>
          <div className="flex gap-10 ">
            <img className="h-[30vh]" src={data.Poster}></img>
            <p>
              • {data.Genre} <br /> • {data.Language}
            </p>
          </div>
          <p className="text-white ">{data.Runtime}</p>
          <p className="text-amber-400 font-medium">
            Rating: {data.imdbRating}/10
          </p>
          <button className="button" onClick={() => setwatch(true)}>
            Watch Now
          </button>
          <p className="text-white">{data.Plot}</p>


          {watch ? (
            <div className="floating-box ">
              {" "}
              <button onClick={() => setwatch(false)} className="close">
                Close
              </button>{" "}
              <iframe
                className="floatingmovie"
                src={link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; Full-Screen"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              >
                {" "}
              </iframe>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default more;
