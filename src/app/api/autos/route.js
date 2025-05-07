import { getByAutoPath } from "@/utils/autoClient";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");

	const searchResults = await getByAutoPath("/autos", [
		{
			key: "query",
			value: query,
		},
	]);

	return new Response(JSON.stringify(searchResults), { status: 200 });
}
