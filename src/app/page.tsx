"use client";
import axios from "axios";
import Search from "@/components/Search/Search";
import User from "@/components/User/User";
import { useState } from "react";

export default function Home() {
  const [playerData, setPlayerData] = useState(null);

  const handleSubmit = async (summonerName: string) => {
    try {
      const response = await axios.get(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(
          summonerName
        )}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
      );

      setPlayerData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main>
      <div>
        <Search onSubmit={handleSubmit} />
        {playerData && <User playerData={playerData} />}
      </div>
    </main>
  );
}
