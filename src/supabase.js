import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pxfqynqlfxaoatsbclpx.supabase.co";
const supabaseKey = "sb_publishable_3UyjqvZmRCThyL-YijP_HA_oRNHnjQv";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);