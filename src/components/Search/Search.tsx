import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSubmit }: any) => {
  const [summonerName, setSummonerName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (summonerName.trim() !== "") {
      onSubmit(summonerName);
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="search">
        <input
          type="text"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
          placeholder="Enter summoner name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Search;
