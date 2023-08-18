"use client";
import axios from "axios";
import Search from "@/components/Search/Search";
import User from "@/components/User/User";
import { useState } from "react";
import CardSkeleton from "@/components/CardSkeleton";
import "./globals.css";

export default function Home() {
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (summonerName: string, region: string) => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `/api/summoner/${region}/${summonerName}`
      );
      console.log(response.data);

      setPlayerData(response.data);

      setError(null);
    } catch (error: any) {
      console.error(error);
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
        <User playerData={playerData} error={error} />
      )}
    </main>
  );
}
