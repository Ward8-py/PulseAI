export default async function handler(req, res) {
  const { query, page = 1 } = req.query;
  const apiKey = process.env.VITE_NEWS_API_KEY;
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=10&page=${page}&token=${apiKey}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(response.status).json(data);
}