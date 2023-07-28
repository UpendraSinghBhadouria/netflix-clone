const key = "36e509aed964dc93468c9f1ae9105fad"

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=36e509aed964dc93468c9f1ae9105fad&query=horror`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
}

export default requests;