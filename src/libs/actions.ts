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

export async function getCurrentPart2(): Promise<{ topic: string, id: number }[]> {
    let { data, error } = await supabase
        .from('v3_part2_topic')
        .select('topic, id')
        .eq('type', 'CURRENT');

    if (error) {
        throw error
    }

    return data ?? [];
}