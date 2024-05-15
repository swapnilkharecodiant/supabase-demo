require('dotenv').config();
const supabase = require('./supabaseClient');

async function callEdgeFunction() {
  try {
    const response = await supabase.functions.invoke('hello-world', {
      body: { key: 'value' }
    });

    if (response.error) {
      throw response.error;
    }

    console.log('Function response:', response.data);
  } catch (error) {
    console.error('Error invoking function:', error);
  }
}

callEdgeFunction();