import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pbyufhbivlzlpbambeko.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieXVmaGJpdmx6bHBiYW1iZWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NzQ2ODQsImV4cCI6MjA2MjU1MDY4NH0.433YCaORJIRe9GDwhhnhfHQHLRoCLhDs1wYjvOrNQIA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);