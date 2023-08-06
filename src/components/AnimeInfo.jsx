import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./ui/Loading";
import "./AnimeInfo.css";

function AnimeInfo() {
  const { id } = useParams();

  const [info, setInfo] = useState(null);

  async function getInfo() {
    const query = `
      query ($id: Int) {
        Media(id: $id, type: ANIME, isAdult: false) {
          id
          title {
            romaji
          }
          coverImage {
            extraLarge
          }
          popularity
          trending
          description
          siteUrl
          trailer {
            thumbnail
          }
          startDate {
            year
            month
            day
          }
        }
      }
    `;

    // Define our query variables and values that will be used in the query request
    const variables = {
      id: `${id}`,
    };

    // Define the config we'll need for our Api request
    const url = "https://graphql.anilist.co";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

    // API code to retrieve data and handle errors
    function handleResponse(response) {
      return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleError(error) {
      alert("Error, check console");
      console.error(error);
    }

    // Make the HTTP Api request
    let data = await fetch(url, options)
      .then(handleResponse)
      .catch(handleError);
    console.log(data.data.Media);
    setInfo(data.data.Media);
  }

  useEffect(() => {
    setTimeout(() => {
      getInfo();
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return info ? (
    <div className="container">
      <div className="row">
        <div className="info__container">
          <figure className="info__img--wrapper">
            <img
              src={info.coverImage.extraLarge}
              alt=""
              className="info__img"
            />
          </figure>
          <div className="info__details">
            <h2 className="info__title">{info.title.romaji}</h2>
            <div
              className="info__description"
              dangerouslySetInnerHTML={{ __html: info.description }}
            ></div>
            {/* {info.trailer.thumbnail ? (
              <figure className="info__trailer--wrapper">
                <img
                  src={info.trailer.thumbnail} 
                  alt=""
                  className="info__trailer"
                />
              </figure>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default AnimeInfo;
