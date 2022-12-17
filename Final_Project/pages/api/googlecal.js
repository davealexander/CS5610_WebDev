export default async function handler(req, res) {
  const { method } = req;
  const CAL_ID = process.env.GOOGLE_CAL;
  const CAL_API = process.env.GOOGLE_API;
  const REFRESH_TOKEN = process.env.GOOGLE_SECRET;
  switch (method) {
    case "GET":
      try {
        let headersList = {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          Authorization: `Bearer ${REFRESH_TOKEN}`,
        };

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
        res.status(200).json({ success: true, data: data });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
  }
  //res.status(200).json({name: "helloworld"});
}

//google example 'https://www.googleapis.com/calendar/v3/calendars/b567c8f9a2f0643c3f3f7a566ae587f6b2f3c2b96dd77241ce7e6abc1146317c%40group.calendar.google.com/events?q=final&key=[YOUR_API_KEY]'
