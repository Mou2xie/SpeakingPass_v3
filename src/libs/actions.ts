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

export async function getCurrentPart2(): Promise<{ topic: string }[]> {
    let { data, error } = await supabase
        .from('v3_part2_topic')
        .select('topic')
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

export async function getPart1QuestionsByCategory(category: string): Promise<{ topic: string; answer: string | null; v3_part1_category: { type: string | null } }[]> {
    let { data, error } = await supabase
        .from('v3_part1_topic')
        .select('topic, answer, v3_part1_category(type)')
        .eq('category', category);

    if (error) {
        throw error
    }

    return data as unknown as { topic: string; answer: string | null; v3_part1_category: { type: string | null } }[];
}

export async function getPart2TopicsByCategory(category: string): Promise<{ topic: string, type: string | null }[]> {
    let { data, error } = await supabase
        .from('v3_part2_topic')
        .select('topic, type')
        .eq('category', category);

    if (error) {
        throw error
    }

    return data ?? [];
}

export async function getPart2TopicById(topic: string): Promise<{ topic: string; subTopics: string[]; part3: string[]; category: string, type: string | null } | null> {
    let { data, error } = await supabase
        .from('v3_part2_topic')
        .select('topic, subTopics, part3, category, type')
        .eq('topic', topic)
        .single();

    if (error) {
        throw error
    }

    return data ?? null;
}