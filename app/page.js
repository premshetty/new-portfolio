import axios from 'axios';
import Home from '../components/Home/Home';

const page = async () => {
  let allData = [];
  let url = 'https://swapi.dev/api/people/';

  try {
    while (url) {
      const response = await axios.get(url);
      const data = response.data;
      const characters = data.results;

      if (characters.length > 0) {
        allData.push(characters);
      }

      url = data.next;
    }
  } catch (error) {
    console.log('Error fetching characters:', error);
  }

  // Flatten the array of arrays into a single array
  const flattenedData = allData.flat();

  return (
    <div>
      <Home data={flattenedData} />
    </div>
  );
};

export default page;
