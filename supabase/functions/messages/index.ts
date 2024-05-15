const supabase = require('./supabaseClient');

Deno.serve(async (req) => {
  const { data, error } = await supabase.from('messages').select('*');
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
})