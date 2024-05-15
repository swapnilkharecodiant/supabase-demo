// index.js
const supabase = require('./supabaseClient');

async function fetchData() {
  const { data, error } = await supabase
    .from('messages')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  console.log('Data:', data);
}

fetchData();