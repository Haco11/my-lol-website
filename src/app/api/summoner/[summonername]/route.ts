import axios from "axios";

export async function GET(
  request: Request,
  { params }: { params: { summonername: string } }
) {
  try {
    const summonerName = params.summonername;

    const response = await axios.get(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
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
