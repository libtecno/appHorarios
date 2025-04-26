//Conexion a base de datos
const supabaseUrl = "https://dstawrebahornyqbbrvr.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzdGF3cmViYWhvcm55cWJicnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1ODUzNjUsImV4cCI6MjA2MTE2MTM2NX0.pvkXTdqwN77aO6duxANtML_iGg3bFP4Slae3yr6sKZU";
  
const client = window.supabase.createClient(supabaseUrl, supabaseKey);