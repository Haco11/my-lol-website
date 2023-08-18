import React from "react";
import "./User.css";

const User = ({ playerData }: any) => {
  return (
    <section>
      <ul>
        {playerData && (
          <div className="user--main">
            <div className="user--profile">
              <div className="user--level"> {playerData.summonerLevel}</div>
              <div className="user--img">
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${playerData.profileIconId}.png`}
                  alt="profile"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="user--info">
              <p>{playerData.name}</p>
              {/* Display other player information as needed */}
            </div>
          </div>
        )}
      </ul>
    </section>
  );
};

export default User;
