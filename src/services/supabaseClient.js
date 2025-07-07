
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qyewhmttvkziolvrhqmy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZXdobXR0dmt6aW9sdnJocW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4OTE2NzcsImV4cCI6MjA2NzQ2NzY3N30.0E2tWq148HvT0xgtDKY-Eferw2Ymr5pZPSqrcigzexM';


export const supabase = createClient(supabaseUrl, supabaseKey)
