export default async function handler(req, res) {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_KEY;

  const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ message: data.message });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
