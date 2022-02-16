const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '8a7432db37f5ff14bd102ef897a46bd5';
async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function getTrendMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${KEY}&language=en-US`
  );
}

export function getOneMovie(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
}


// const myKey = "8a7432db37f5ff14bd102ef897a46bd5";
// console.log(myKey);

// axios.defaults.baseURL = 'https://api.themoviedb.org';

// const params = () =>
//   (axios.defaults.params = {
//     key: '8a7432db37f5ff14bd102ef897a46bd5',
//   });

// export default function getTrendMovies() {
//   params();
//   return axios
//     .get('/3/trending/all/day')
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Not found');
//       }
//         console.log(res);
//         console.log(res.results);
//       return res.results;
//     })
//     .catch(err => {
//       throw err;
//     });
// }
