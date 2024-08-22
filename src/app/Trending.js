import React, { useState } from "react";

const Trending = () => {
  const [data, setdata] = useState();
  const [watch, setwatch] = useState(false);
  const [link, setlink] = useState();
  const fetchdata = async (Mov) => {
    const responce = await fetch(`https://www.omdbapi.com/?t=${Mov}&plot=full&apikey=857db68`);
    setdata(await responce.json());
    console.log(data);
  };
  return (
    <div className="p-3">
      <h1 className="text-white font-bold text-xl">Trending🔥</h1>
      <hr />
      <br />
      <div className="trend flex justify-around h-[40vh] ">
        <img
          className="trendimg"
          onClick={() => {
            fetchdata("Bhediya"),
              setlink(
                "https://www.youtube.com/embed/mfl--nI-Bhs?si=640OwTvvvXC7Rv68"
              );
          }}
          src="https://v3img.voot.com/resizeMedium,w_768,h_432/v3Storage/assets/16x9-1724140146233.jpg"
        />
        <img
          className="trendimg"
          onClick={() => {
            fetchdata("2012"),
              setlink(
                "https://www.youtube.com/embed/ce0N3TEcFw0?si=XgFqGpxH7fU8njtu"
              );
          }}
          src="https://v3img.voot.com/resizeMedium,w_768,h_432/v3Storage/assets/16x9--1716306833791.jpg"
          alt=""
        />
        <img
          className="trendimg"
          onClick={() => {
            fetchdata("Demon Slayer: Kimetsu no Yaiba"),
              setlink(
                "https://www.youtube-nocookie.com/embed/wyiZWYMilgk?si=VoG6Vf8BRxJnbaRA"
              );
          }}
          src="https://v3img.voot.com/resizeMedium,w_384,h_216/v3Storage/assets/16x9dsh-1723201648720.jpg"
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

export default Trending;
