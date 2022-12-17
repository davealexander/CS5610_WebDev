import Headerbar from "../components/headerbar/headerbar";
import Navbar from "../components/navbar/Navbar";
import style from "../styles/events.module.css";
import { useEffect, useState } from "react";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
const CAL_ID = process.env.GOOGLE_CAL;
const CAL_API = process.env.GOOGLE_API;

//Events Module pulls in GoogleCal API to show all events and search on them
//Module still in progress as Google API requires refresh token everyhour
export default function Events({ results: events }) {
  const [search, setsearch] = useState("");

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();
    setsearch(e.target.value);
    if (search.length > 0) {
      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?q=${search}&key=${CAL_API}`
        );
        const data = res.json();
        // return console.log(data.items);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Headerbar></Headerbar>
      <Navbar></Navbar>
      <div className={`container-sm ${style.eventContainer} `}>
        <h1 className={style.Title}>Events</h1>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
            value={search}
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            style={{ marginLeft: 800 }}
            type="submit"
            onSubmit={handleChange}
          >
            Search
          </button>
        </form>

        {events.items.map((ev, index) => (
          <div className="card" key={index}>
            <div className="card-header" style={{ color: "Blue" }}>
              {ev.summary}
            </div>
            <div className="card-body">
              <h5 className="card-title">{ev.description}</h5>
              <p className="card-text">
                {"Date: " + new Date(ev.start.dateTime).toDateString() + " "}
              </p>
              <p>
                {"Begins: " +
                  new Date(ev.start.dateTime).toLocaleTimeString("en-US", {
                    timeZone: "America/New_York",
                  }) +
                  " Ends: " +
                  new Date(ev.end.dateTime).toLocaleTimeString("en-US", {
                    timeZone: "America/New_York",
                  })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  //SERVER RUN CODE ONLY.
  //THIS WILL NEVER BE PRESENTED TO THE CLIENT
  returnTo: "/dashboard",
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res);
    const CAL_ID = process.env.GOOGLE_CAL;
    const CAL_API = process.env.GOOGLE_API;
    const CAL_SECRET = process.env.GOOGLE_SECRET;

    const searchURL =
      "https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?q=${search}&key=${CAL_API}";

    let headersList2 = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: `Bearer${" " + CAL_SECRET}`,
    };

    let response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?key=${CAL_API}`,
      {
        method: "GET",
        headers: headersList2,
      }
    );

    let data = await response.json();

    return {
      props: {
        results: data,
      },
    };
  },
});
