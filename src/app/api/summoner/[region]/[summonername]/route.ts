import axios from "axios";

interface RequestParams {
  params: {
    summonername: string;
    region: string;
  };
}

async function fetchSummonerData(region: string, summonerName: string) {
  try {
    const summonerResponse = await axios.get(
      `https://${region}.api.riotgames.com` +
        `/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
    );
    return summonerResponse.data;
  } catch (error: any) {
    throw error;
  }
}

async function fetchMatchHistory(region: string, playerPuuid: string) {
  try {
    const matchHistoryResponse = await axios.get(
      `https://europe.api.riotgames.com` +
        `/lol/match/v5/matches/by-puuid/${playerPuuid}/ids?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
    );

    const gamePromises = matchHistoryResponse.data.map(
      async (gameId: string) => {
        try {
          const gameResponse = await axios.get(
            `https://europe.api.riotgames.com` +
              `/lol/match/v5/matches/${gameId}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
          );
          return gameResponse.data;
        } catch (error) {
          console.error(`Error fetching game data for game ${gameId}:`, error);
          return null; // Return null for failed requests
        }
      }
    );

    const games = await Promise.all(gamePromises);
    return games.filter((game) => game !== null); // Filter out failed requests
  } catch (error: any) {
    throw error;
  }
}

export async function GET(request: Request, { params }: RequestParams) {
  const summonerName = params.summonername;
  const region = params.region;

  try {
    const summonerData = await fetchSummonerData(region, summonerName);
    const playerPuuid = summonerData.puuid;
    const matchHistory = await fetchMatchHistory(region, playerPuuid);
    console.log("aa");
    return new Response(
      JSON.stringify({ playerData: summonerData, match: matchHistory }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return new Response(JSON.stringify({ error: "Summoner not found." }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ error: "An error occurred." }), {
      status: 500,
    });
  }
}
