const API_KEY = process.env.VITE_API_KEY;
export default async function handler(req, res) {
  try {
    const type = req.query.type;
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Weather API error:", error.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
