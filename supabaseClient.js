require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? process.env.SUPABASE_URL;
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variable');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;