import Row from "../Row";
import Banner from "../Banner";

import requests from "../../api/requests";
import { useSearch } from '../../context/SearchContext';

function Main() {
    const { flag } = useSearch();

    return(
        flag ? (<div></div>) :(
        <div>
            <Banner />
            <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />    
        </div>)
    )
}

export default Main;