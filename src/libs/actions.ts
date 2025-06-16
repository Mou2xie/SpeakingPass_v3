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
        .eq('type', 'CURRENT')
        .limit(20);

    if (error) {
        throw error
    }

    return data ?? [];
}

export async function getAllPart1Categories(): Promise<{ category: string; type: string | null }[]> {
    let { data, error } = await supabase
        .from('v3_part1_category')
        .select('category, type');

    if (error) {
        throw error
    }

    return data ?? [];
}

export async function getPart1QuestionsByCategory(category: string): Promise<{ topic: string; v3_part1_category: { type: string | null } }[]> {
    let { data, error } = await supabase
        .from('v3_part1_topic')
        .select('topic, v3_part1_category(type)')
        .eq('category', category);

    if (error) {
        throw error
    }

    return data as unknown as { topic: string; v3_part1_category: { type: string | null } }[];
}

export async function getPart2TopicsByCategory(category: string): Promise<{ topic: string, id: number, type: string | null }[]> {
    let { data, error } = await supabase
        .from('v3_part2_topic')
        .select('topic, id, type')
        .eq('category', category);

    if (error) {
        throw error
    }

    return data ?? [];
}

export async function getPart2TopicById(id: number): Promise<{ topic: string; subTopics: string[]; part3: string[]; category: string, type: string | null } | null> {
    let { data, error } = await supabase
        .from('v3_part2_topic')
        .select('topic, subTopics, part3, category, type')
        .eq('id', id)
        .single();

    if (error) {
        throw error
    }

    return data ?? null;
}