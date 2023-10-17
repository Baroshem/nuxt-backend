import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body)
    throw createError({ statusCode: 400, statusMessage: "Bad Request" });

  const client = await serverSupabaseClient(event);

  const { name, id, image } = body;

  const { data } = await client
    .from("cats")
    .update({ name, image } as never)
    .eq("id", id);

  return { cat: data };
});
