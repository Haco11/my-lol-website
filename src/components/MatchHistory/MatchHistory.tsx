import React from "react";

const MatchHistory = ({ matchData }: any) => {
  return (
    <>
      {matchData && (
        <section>
          {matchData?.map((gameData: any, index: number) => (
            <>
              <h2>Game {index + 1}</h2>
              <div>
                {gameData.info.participants.map((data: any, i: number) => (
                  <p>
                    Player {i + 1}: {data.summonerName}, KDA:{data.kills}/
                    {data.deaths}/{data.assists}
                  </p>
                ))}
              </div>
            </>
          ))}
        </section>
      )}
    </>
  );
};

export default MatchHistory;
