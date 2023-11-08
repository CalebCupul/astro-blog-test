const baseUrl = import.meta.env.NEWS_API_BASE_URL;
const apiKey = import.meta.env.NEWS_API_KEY;

export async function fetchNewsData({country = 'us', category = null} = {}) {
    const endpoint = "top-headlines";
    const params = new URLSearchParams({
      country: country,
      apiKey: apiKey,
    });

    if (category) { params.append('category', category)};
  
    try {
      const response = await fetch(`${baseUrl}${endpoint}?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch news data:', error);
      return null; // Or handle the error as needed
    }
  }