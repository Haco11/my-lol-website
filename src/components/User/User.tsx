import React from "react";

const User = ({ playerData }: any) => {
  return (
    <div>
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
    </div>
  );
};

export default User;
