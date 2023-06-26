const apiConfig={
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8b5bc89c3aa94911f33a526d5c7fdf97',
    originalImage: (imgPath)=> `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath)=> `https://image.tmdb.org/t/p/w500/${imgPath}`

}

 export default apiConfig;