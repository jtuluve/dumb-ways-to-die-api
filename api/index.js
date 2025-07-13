import data from "./data.json" with {type:"json"};

/**
 * @param {Request} req
 */
export async function GET(req) {
  let url = new URL(req.url);
  let params = url.searchParams;
  let name = params.get("name") || "You";
  return new Response(
    data[Math.floor(Math.random() * data.length)].replaceAll("${{name}}", name)
  );
}
