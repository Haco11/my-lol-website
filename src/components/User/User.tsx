import React from "react";

const User = ({ playerData }: any) => {
  return (
    <div>
      <ul>
        {playerData && (
          <div>
            <h2>Player Information</h2>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${playerData.profileIconId}.png`}
              alt="profile"
              width={100}
              height={100}
            />
            <p>Name: {playerData.name}</p>
            <p>Level: {playerData.summonerLevel}</p>
            {/* Display other player information as needed */}
          </div>
        )}
      </ul>
    </div>
  );
};

export default User;
