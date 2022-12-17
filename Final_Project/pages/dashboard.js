import Navbar from "../components/navbar/Navbar";
import dashstyle from "../styles/dashboard.module.css";
import { useState } from "react";
import axios from "axios";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Headerbar from "../components/headerbar/headerbar";

const url = "http://localhost:3000/api/announcement/";

//A home page for authenticated user to show announcements and later
//other relevant information
export default function Dashboard(props, user) {
  //Logic to handle announcements
  const [announcements, setannouncements] = useState(props.announcements);
  const [announcement, setannouncement] = useState({ announcement: "" });

  //React handlehange to set announcements
  const handleChange = ({ currentTarget: input }) => {
    input.value === ""
      ? setannouncement({ announcement: "" })
      : setannouncement((prev) => ({ ...prev, announcement: input.value }));
  };

  //Handler to add an announcement to the announcement card
  const addAnnouncement = async (e) => {
    e.preventDefault();
    try {
      if (announcement._id) {
        const { data } = await axios.put(url + "/" + announcement._id, {
          announcement: announcement.announcement,
        });
        const originalannouncements = [...announcements];
        const index = originalannouncements.findIndex(
          (t) => t._id === announcement._id
        );
        originalannouncements[index] = data.data;
        setannouncements(originalannouncements);
        setannouncement({ announcement: "" });
        console.log(data.message);
      } else {
        const { data } = await axios.post(url + "/announcements", announcement);
        setannouncements((prev) => [...prev, data.data]);
        setannouncement({ announcement: "" });
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Allows to edit the selected announcement
  const editAnnouncement = (id) => {
    const currentannouncement = announcements.filter(
      (announcement) => announcement._id === id
    );
    setannouncement(currentannouncement[0]);
  };

  const updateAnnouncement = async (id) => {
    try {
      const originalannouncements = [...announcements];
      const index = originalannouncements.findIndex((t) => t._id === id);
      const { data } = await axios.put(url + "/" + id, {
        completed: !originalannouncements[index].completed,
      });
      originalannouncements[index] = data.data;
      setannouncements(originalannouncements);
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  //Deletes the announcement
  const deleteAnnouncement = async (id) => {
    try {
      const { data } = await axios.delete(url + "/" + id);
      setannouncements((prev) =>
        prev.filter((announcement) => announcement._id !== id)
      );
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Headerbar></Headerbar>
      <Navbar></Navbar>
      <h1>{user.name}</h1>
      <div className={dashstyle.container}>
        {/* Announcement Card Section */}
        <div className={dashstyle.largeCardBox}>
          <h2>Announcements</h2>
          <form onSubmit={addAnnouncement} className={dashstyle.form}>
            <input
              className={dashstyle.formInputText}
              type="text"
              placeholder="announcement to be done..."
              onChange={handleChange}
              value={announcement.announcement}
            />
            <button type="submit" className={dashstyle.buttonForm}>
              {announcement._id ? "Update" : "Add"}
            </button>
          </form>
          <div className={dashstyle.announcementContainer}>
            {/* Announcement Card Content */}
            {announcements.map((announcement) => (
              <div
                className={dashstyle.announcementPost}
                key={announcement._id}
              >
                <p
                  className={
                    announcement.completed
                      ? dashstyle.announcement_text +
                        " " +
                        dashstyle.line_through
                      : dashstyle.announcement_text
                  }
                >
                  <button onClick={() => editAnnouncement(announcement._id)}>
                    &#9998;
                  </button>

                  <button onClick={() => deleteAnnouncement(announcement._id)}>
                    &#10006;
                  </button>

                  <input
                    type="checkbox"
                    checked={announcement.completed}
                    onChange={() => updateAnnouncement(announcement._id)}
                  />
                  {announcement.announcement}
                </p>
              </div>
            ))}
            {announcements.length === 0 && <h2>No announcements</h2>}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/dashboard",
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res);
    const { data } = await axios.get(url + "announcements");
    return {
      props: {
        announcements: data.data,
      },
    };
  },
});
