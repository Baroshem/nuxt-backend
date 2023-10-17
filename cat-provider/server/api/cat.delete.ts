import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const id = query.id;

  if (!id) throw createError({ statusCode: 400, statusMessage: "Bad Request" });

  const client = await serverSupabaseClient(event);

  const { data } = await client.from("cats").delete().eq("id", id);

  return { cat: data };
});
