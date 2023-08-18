"use client";
import axios from "axios";
import Search from "@/components/Search/Search";
import User from "@/components/User/User";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState<string | null>(null); // Specify the type as string | null
  const handleSubmit = async (summonerName: string) => {
    try {
      const response = await axios.get(`/api/summoner/${summonerName}`);
      console.log(response.data);

      setPlayerData(response.data);
      setError(null);
    } catch (error: any) {
      console.error(error);
      setError(error.response.data.error);
    }
  };

  return (
    <main className="container">
      <Search onSubmit={handleSubmit} />
      {error && <p className="error-message">{error}</p>}
      {playerData && <User playerData={playerData} />}
    </main>
  );
}
