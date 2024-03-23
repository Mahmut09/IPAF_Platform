import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Tournament = () => {
    const { tournamentName } = useParams();
    const [tournamentData, setTournamentData] = useState(null);
    
    useEffect(() => {
        const fetchTournamentData = async () => {
            try {
                const response = await axios.get(`/api/tournaments/${encodeURIComponent(tournamentName)}`);
                setTournamentData(response.data);
            } catch (error) {
                console.error("Failed to fetch tournament data", error);
            }
        };

        fetchTournamentData();
    }, [tournamentName]);

    if (!tournamentData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{tournamentData.name}</h1>
        </div>
    );
};

export default Tournament;
