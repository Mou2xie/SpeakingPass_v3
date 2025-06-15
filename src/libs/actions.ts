'use server'

import { supabase } from '@/libs/supabase';

export async function getCurrentPart1Category(): Promise<{ category: string }[]> {
    let { data, error } = await supabase
        .from('v3_part1_category')
        .select('category')
        .eq('type', 'CURRENT');

    if (error) {
        throw error
    }

    return data ?? [];
}