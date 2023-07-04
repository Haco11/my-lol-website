import axios from "axios";
import React, { useState } from "react";

const Search = ({ onSubmit }: any) => {
  const [summonerName, setSummonerName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(summonerName);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
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
