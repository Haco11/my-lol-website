import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSubmit }: any) => {
  const [summonerName, setSummonerName] = useState("");
  const [region, setRegion] = useState("euw1");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (summonerName.trim() !== "") {
      onSubmit(summonerName);
      setSummonerName("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="search">
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="br1">BR1</option>
          <option value="eun1">EUN1</option>
          <option value="euw1">EUW1</option>
          <option value="jp1">JP1</option>
          <option value="kr">KR</option>
          <option value="la1">LA1</option>
          <option value="la2">LA2</option>
          <option value="na1">NA1</option>
          <option value="oc1">OC1</option>
          <option value="tr1">TR1</option>
          <option value="ru">RU</option>
          <option value="ph2">PH2</option>
          <option value="sg2">SG2</option>
          <option value="th2">TH2</option>
          <option value="tw2">TW2</option>
          <option value="vn2">VN2</option>
        </select>
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
