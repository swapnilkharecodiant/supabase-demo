Deno.serve(async (req) => {
  const { name } = await req.json();
  const data = {
    message: `Hii, Hello ${name}!`,
  }
  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
