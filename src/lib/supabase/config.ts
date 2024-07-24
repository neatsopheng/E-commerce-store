import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fpgdrcodvknjcfpancul.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZ2RyY29kdmtuamNmcGFuY3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MzAzNzQsImV4cCI6MjAzNzMwNjM3NH0.u5VnEu-z0X3vktFGz73XAj_c0fjE9gD79RhtEniZlCI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;




