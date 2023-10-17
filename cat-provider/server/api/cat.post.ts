import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body || !body.image || !body.name)
    throw createError({ statusCode: 400, statusMessage: "Bad Request" });

  const client = await serverSupabaseClient(event);

  const { data } = await client.from("cats").insert(body);

  return { cat: data };
});
