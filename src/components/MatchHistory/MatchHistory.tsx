import { Match, Participant } from "@/types/Interfaces";
import React from "react";
import "./MatchHistory.css";

const formatTimeAgo = (timestamp: number) => {
  const currentTime = Date.now();
  const timeDifference = currentTime - timestamp;
  const seconds = Math.floor(timeDifference / 1000);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }

  const months = Math.floor(weeks / 4);
  return `${months} ${months === 1 ? "month" : "months"} ago`;
};

const getParticipantBySummonerName = (
  participants: Participant[],
  summonerName: string
) => {
  return participants.find(
    (participant: Participant) => participant.summonerName === summonerName
  );
};

const MatchHistory = ({ matchData, playerData }: any) => {
  const summonerName = playerData?.name;
  return (
    <>
      {matchData && (
        <section>
          {matchData?.map((gameData: Match, index: number) => {
            const playerParticipant = getParticipantBySummonerName(
              gameData.info.participants,
              playerData.name
            );

            return (
              <div key={index} className="match">
                <div>
                  <h3>{gameData.info.gameMode}</h3>
                  {playerParticipant && (
                    <div className="champion">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${playerParticipant.championName}.png`}
                        alt={`Champion ${playerParticipant.championName}`}
                        width={64}
                        height={64}
                      />
                    </div>
                  )}
                  <p>{formatTimeAgo(gameData.info.gameStartTimestamp)}</p>
                </div>
                {playerParticipant && (
                  <p>
                    KDA: {playerParticipant.kills}/{playerParticipant.deaths}/
                    {playerParticipant.assists}
                  </p>
                )}

                {playerParticipant && playerParticipant.itemsPurchased > 0 && (
                  <div className="items">
                    <p>Summoner's Items:</p>
                    {Array.from({ length: 6 }).map((_, i) => {
                      const itemId =
                        playerParticipant[`item${i}` as keyof Participant];
                      if (itemId !== 0) {
                        return (
                          <img
                            key={i}
                            src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/${itemId}.png`}
                            alt={`Item ${i + 1}`}
                            width={32}
                            height={32}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
                <div>
                  {gameData.info.participants.map(
                    (data: Participant, i: number) => (
                      <p key={i}>
                        Player {i + 1}: {data.summonerName}, KDA:{data.kills}/
                        {data.deaths}/{data.assists}
                      </p>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default MatchHistory;
