Deno.serve(async (req) => {
console.log('req :', req);
  const { name } = await req.json();
  console.log('name :', name);
  const data = {
    message: `Hello ${name}!`,
  }
  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
