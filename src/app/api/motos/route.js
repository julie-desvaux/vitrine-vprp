import { getByMotoPath } from "@/utils/motoClient";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");

	const searchResults = await getByMotoPath("/motos", [
		{
			key: "query",
			value: query,
		},
	]);

	return new Response(JSON.stringify(searchResults), { status: 200 });
}
