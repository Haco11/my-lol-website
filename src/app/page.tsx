"use client";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [summonerName, setSummonerName] = useState("");
  const [playerData, setPlayerData] = useState<any>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
      );

      setPlayerData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main>
      <h1>League of Legends Match History</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
          placeholder="Enter summoner name"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {playerData && (
          <div>
            <h2>Player Information</h2>
            <p>Name: {playerData.name}</p>
            <p>Level: {playerData.summonerLevel}</p>
            {/* Display other player information as needed */}
          </div>
        )}
      </ul>
    </main>
  );
}
