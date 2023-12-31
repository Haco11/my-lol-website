import React from "react";
import "./User.css";

const User = ({ playerData, error }: any) => {
  return (
    <div>
      {error ? (
        <section>
          <p className="error-message">{error}</p>
        </section>
      ) : (
        <>
          {playerData && (
            <section>
              <div className="user--main">
                <div className="user--profile">
                  <div className="user--level"> {playerData.summonerLevel}</div>
                  <div className="user--img">
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/${playerData.profileIconId}.png`}
                      alt="profile"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="user--info">
                  {playerData && <p>{playerData.name}</p>}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default User;
