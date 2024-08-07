/*
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Laynecatia/js-developer-portfolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}
    */

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Laynecatia/js-developer-portfolio/main/data/profile.json';
    try {
      const fetching = await fetch(url);
      if (!fetching.ok) {
        throw new Error('Network response was not ok ' + fetching.statusText);
      }
      return await fetching.json();
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }