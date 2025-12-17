// Array con tutti i dati dei film
const movieData = [
    {
        name: "La città incantata", year: 2001, genre: "Fantasy, Avventura",
        image: "https://pad.mymovies.it/filmclub/2003/04/021/locandina.jpg",
        banner: "https://wallpapers.com/images/hd/spirited-away-background-tme7dzn54zpdl3ka.jpg",
        description: "Chihiro è una bambina di dieci anni molto capricciosa e viziata e quando  suoi genitori le dicono che devono trasferirsi, ovviamente reagisce in modo irritante, arrabbiandosi. Durante il viaggio per raggiungere la nuova casa, i tre si fermano in una città fantasma governata da una strega malvagia con al suo seguito antiche divinità e creature magiche.",
        stats: {
            "IMDB": 8.6,
            "RT": "96%",
            "Box Office": "$396M",
            "Premio": "Oscar"
        }
    },
    {
        name: "La tomba delle lucciole", year: 1988, genre: "Drammatico",
        image: "https://pad.mymovies.it/filmclub/2006/05/006/locandinapg8.jpg",
        banner: "https://cinecittanews.it/wp-content/uploads/2024/09/una_tomba_per_le_lucciole-1.jpg",
        description: "Il film racconta la storia di Seita e Setsuko, due fratellini giapponesi che vivono il dramma del bombardamento di Kobe durante la seconda guerra mondiale. La sera del 21 Settembre 1945 il giovane ragazzo muore di stenti in una stazione ferroviaria. Nelle sue mani tiene solo una scatola di latta che contiene i resti della sorellina. Gli spiriti dei due bambini rivivono gli avvenimenti dei propri ultimi mesi alla flebile luce delle lucciole.",
        stats: {
            "IMDB": 8.5,
            "RT": "100%",
            "Box Office": "$15M",
            "Premio": "-"
        }
    },
    {
        name: "Principessa Mononoke", year: 1997, genre: "Fantasy, Avventura",
        image: "https://pad.mymovies.it/filmclub/2005/11/052/locandina.jpg",
        banner: "https://wallpapers.com/images/hd/kodama-on-trees-princess-mononoke-cidc5pessava2qtw.jpg",
        description: "Un anonimo speziale ha ricevuto il potere di percepire i mononoke, spiriti vendicativi. Possiede una spada magica in grado di neutralizzarli, ma può usarla solo se conosce la forma, la verità e il motivo del mononoke.",
        stats: {
            "IMDB": 8.3,
            "RT": "93%",
            "Box Office": "$212M",
            "Premio": "Japan Academy"
        }
    },
    {
        name: "Il castello errante di Howl", year: 2004, genre: "Fantasy, Romantico",
        image: "https://pad.mymovies.it/filmclub/2004/08/005/locandina.jpg",
        banner: "https://wallpapers.com/images/hd/howl-s-moving-castle-background-rzheursqil8ohp3b.jpg",
        description: "Sophie è una semplice ragazza di diciotto anni che gestisce il negozio di cappelli del defunto padre. Durante una delle sue rare uscite in città, viene importunata da due gendarmi presenti a causa della guerra, ma è prontamente salvata dal bellissimo mago Howl, il quale prova subito simpatia per lei.",
        stats: {
            "IMDB": 8.2,
            "RT": "93%",
            "Box Office": "$236M",
            "Premio": "Nomina agli Oscar"
        }
    },
    {
        name: "Il mio vicino Totoro", year: 1988, genre: "Avventura",
        image: "https://pad.mymovies.it/filmclub/2007/22/235/locandina.jpg",
        banner: "https://wallpapers.com/images/hd/studio-ghibli-totoro-with-umbrella-m5u0y7vyajsu3ip4.jpg",
        description: "Le sorelline Satsuki e Mei si trasferiscono insieme al padre in una nuova casa in campagna, in attesa che la madre venga dimessa dal vicino ospedale. Per le due bambine inizia un viaggio alla scoperta di un mondo sconosciuto, abitato da creature fantastiche: i nerini del buio, spiritelli della fuliggine che occupano le vecchie dimore abbandonate.",
        stats: {
            "IMDB": 8.1,
            "RT": "94%",
            "Box Office": "$41M",
            "Premio": "Olivier Awards"
        }
    },
    {
        name: "Il castello nel cielo", year: 1986, genre: "Fantascienza, Avventura",
        image: "https://pad.mymovies.it/filmclub/2006/10/211/locandina.jpg",
        banner: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbsy8FMf_hjIXA9FgEN5WuCkJS9WgxdJTcvAF_CuZuFpDzoC9NYWn5Du9aXxo6fFw-_bofM16_8ccIxyVMMhAH5lfrn-IT5D5Fyo.jpg?r=f22",
        description: "La giovane Sheeta è tenuta prigioniera dal cinico colonnello Muska a bordo di un'aeronave diretta verso la fortezza Tedis. Durante il volo, in una notte rischiarata dalla luna, il veicolo viene attaccato da una banda di pirati guidata dall'intrepida Dola, che vuole impossessarsi del ciondolo che la ragazzina porta al collo. Questo oggetto ha infatti un valore inestimabile poiché permette di vincere la forza di gravità.",
        stats: {
            "IMDB": 8.0,
            "RT": "91%",
            "Box Office": "$157M",
            "Premio": "Ōfuji Award"
        }
    },
    {
        name: "Nausicaä della valle del vento", year: 1984, genre: "Fantasy",
        image: "https://pad.mymovies.it/filmclub/2007/02/233/locandina.jpg",
        banner: "https://images.alphacoders.com/109/thumb-1920-109251.jpg",
        description: "Sono passati mille anni dai sette giorni del fuoco, una spaventosa guerra termonucleare che ha annientato la civiltà umana e buona parte dell'ecosistema terrestre originale. Il Mare della Rovina si è espanso drammaticamente, occupando i regni degli uomini e invadendo la Terra con i suoi insetti giganti e le sue spore velenose. I pochi esseri umani superstiti vivono in due grandi regni, Tolmechia e Pejite.",
        stats: {
            "IMDB": 8.0,
            "RT": "91%",
            "Box Office": "$14M",
            "Premio": "Ōfuji Award"
        }
    },
    {
        name: "Si alza il vento", year: 2013, genre: "Drammatico",
        image: "https://pad.mymovies.it/filmclub/2012/12/081/locandina.jpg",
        banner: "https://upload.wikimedia.org/wikipedia/it/9/99/Si_alza_il_vento_bluray_screenshot.png",
        description: "Il film racconta la vita e la tragica storia d'amore di Jirō Horikoshi, l'ingegnere aeronautico che durante il secondo conflitto mondiale progettò numerosi aerei da combattimento utilizzati dai giapponesi nelle azioni di guerra contro gli americani, tra i quali il Mitsubishi A6M 'Zero', utilizzato nell'attacco di Pearl Harbor. Da ragazzo il protagonista incontra nei propri sogni l'ingegnere italiano Giovanni Battista Caproni, pioniere dell'ingegneria aeronautica.",
        stats: {
            "IMDB": 7.8,
            "RT": "85%",
            "Box Office": "$137M",
            "Premio": "Nomination agli Oscar"
        }
    },
    {
        name: "Kiki consegne a domicilio", year: 1989, genre: "Drammatico, Avventura",
        image: "https://pad.mymovies.it/filmclub/2010/10/092/locandina.jpg",
        banner: "https://wallpapercat.com/w/full/2/d/3/33247-3840x2160-desktop-4k-kikis-delivery-service-background.jpg",
        description: "Kiki e il suo gatto parlante, Jiji, si trasferiscono in una città di mare secondo la tradizione del suo villaggio per le streghe in formazione. Dopo aver imparato a controllare la sua scopa, Kiki crea un servizio di consegne a domicilio.",
        stats: {
            "IMDB": 7.8,
            "RT": "98%",
            "Box Office": "$42M",
            "Premio": "Japan Academy"
        }
    },
    {
        name: "Ponyo sulla scogliera", year: 2008, genre: "Avventura",
        image: "https://pad.mymovies.it/filmclub/2008/07/042/locandina.jpg",
        banner: "https://images3.alphacoders.com/809/thumb-1920-809783.jpg",
        description: "La pesciolina Ponyo viene raccolta dall'oceano e curata da un bambino. Costretta a tornare in mare, Ponyo si trasforma in bambina per ricongiungersi all'amico.",
        stats: {
            "IMDB": 7.6,
            "RT": "91%",
            "Box Office": "$206M",
            "Premio": "Japan Academy"
        }
    }
];

// Funzione per andare alla pagina dettagli del film
function goToMovieDetail(movieIndex) {
    // Salvo l'indice del film nel localStorage
    localStorage.setItem('selectedMovie', movieIndex);
    // Vado alla pagina dettagli
    window.location.href = 'film.html';
}

// Funzione per creare e mostrare tutti i film nella pagina
function renderMovies() {
    // Prendo il contenitore dove mettere i film
    const grid = document.querySelector('.grid-movies');
    
    // Se non trovo il contenitore, mostro un errore
    if (!grid) {
        console.error('Elemento .grid-movies non trovato!');
        return;
    }
    
    // Pulisco il contenitore (rimuovo tutto quello che c'è dentro)
    grid.innerHTML = '';
    
    // Per ogni film nell'array, creo una card
    movieData.forEach((movie, index) => {
        // Creo un nuovo div per la card del film
        const movieCard = document.createElement('div');
        movieCard.className = 'movie';
        
        // Riempio la card con le informazioni del film
        movieCard.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.image}" alt="${movie.name}">
            </div>
            <div class="movie-content">
                <div>
                    <h2>${movie.name}</h2>
                    <p class="year">${movie.year} • ${movie.genre}</p>
                    <p class="description">${movie.description}</p>
                </div>
                
                <div class="stats">
                    <div class="stat">
                        <span class="stat-label">IMDB</span>
                        <span class="stat-value">${movie.stats.IMDB}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">RT</span>
                        <span class="stat-value">${movie.stats.RT}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Box Office</span>
                        <span class="stat-value">${movie.stats["Box Office"]}</span>
                    </div>
                </div>
                
                <div class="premio">
                    <span>${movie.stats.Premio}</span>
                </div>
            </div>
        `;
        
        // Quando clicco sulla card, vado alla pagina dettagli
        movieCard.addEventListener('click', () => goToMovieDetail(index));
        
        // Aggiungo la card al contenitore
        grid.appendChild(movieCard);
    });
}

// Quando la pagina è caricata, mostro tutti i film
document.addEventListener('DOMContentLoaded', renderMovies);