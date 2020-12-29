const API_KEY = 'YhhbrZlN91PqZQn4hYdJ1SqnWJt1';

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;

    return (
        fetch(url).then(
            (response) => {
                return response.json();
            }
        ).catch(
            (error) => {
                alert("Error : " + error);
                console.log("Error : " + error);
            }
        )
    );
}

// Load Match Details

export const getMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`;

    return (
        fetch(url).then(
            (response) => {
                return response.json();
            }
        ).catch(
            (error) => {
                return console.log("Error: " , error )
            }
        )
    )

}