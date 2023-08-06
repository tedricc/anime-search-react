import { Routes, Route, useNavigate } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import "./App.css";
import Results from "./pages/Results";
import { useState } from "react";
import Info from "./pages/Info";

function App() {
  const navigate = useNavigate();

  const [search, setSearch] = useState([]);

  async function searchRedirect(event) {
    event.preventDefault();
    const form = event.target; // Get the form element from the event object
    const formData = new FormData(form); // Get the form data as a FormData object

    // Access the input value using the input field name
    const searchTerm = formData.get("search__term");
    // localStorage.setItem("searchTerm", searchTerm);

    navigate("/results");

    const query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(id: $id, search: $search, type: ANIME, isAdult: false) {
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
          startDate {
            year
            month
            day
          }
        }
      }
    }
  `;

    // Define our query variables and values that will be used in the query request
    const variables = {
      search: `${searchTerm}`,
      page: 1,
      perPage: 8,
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

    setSearch(data.data.Page.media);
  }

  return (
    <div className="app">
      {/* <ScrollToTop> */}
        <Routes>
          <Route path="/" element={<Home searchRedirect={searchRedirect} />} />
          <Route
            path="/results"
            element={
              <Results searchRedirect={searchRedirect} search={search} />
            }
          />
          <Route
            path="/results/:id"
            element={<Info searchRedirect={searchRedirect} />}
          />
        </Routes>
      {/* </ScrollToTop> */}
    </div>
  );
}

export default App;
