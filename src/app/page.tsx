"use client";
import axios from "axios";
import Search from "@/components/Search/Search";
import User from "@/components/User/User";
import MatchHistory from "@/components/MatchHistory/MatchHistory";
import { useState } from "react";
import CardSkeleton from "@/components/CardSkeleton";
import "./globals.css";

export default function Home() {
  const [playerData, setPlayerData] = useState(null);
  const [matchData, setMatchData] = useState(null);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (summonerName: string, region: string) => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `/api/summoner/${region}/${summonerName}`
      );
      setMatchData(response.data.match);
      setPlayerData(response.data.playerData);

      setError(null);
    } catch (error: any) {
      console.error(error.response.data.error);
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container">
      <Search onSubmit={handleSubmit} />
      {isLoading ? (
        <section className="loading">
          <CardSkeleton />
        </section>
      ) : (
        <>
          <User playerData={playerData} error={error} />
          <MatchHistory matchData={matchData} />
        </>
      )}
    </main>
  );
}
