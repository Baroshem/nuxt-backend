import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const name = query.name;

  const client = await serverSupabaseClient(event);

  return !name
    ? (await client.from("cats").select("*")).data
    : (await client.from("cats").select("*").eq("name", name).single()).data;
});
