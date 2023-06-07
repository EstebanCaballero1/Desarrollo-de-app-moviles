function hashTags(titulo) {
    let palabras, hashtag;
    titulo = titulo.toLowerCase();
    
    palabras = titulo.split(" ");
    palabras.sort((a, b) => b.length - a.length);
    
    hashtag = palabras.slice(0, 3);
   
    for( let i = 0; i < hashtag.length; i++ ){
        hashtag[i] = '#' + hashtag[i];
    }
   
    return 'Hashtags: ["' + hashtag[0] + '","' + hashtag[1] + '","' + hashtag[2] + '"]';
}  