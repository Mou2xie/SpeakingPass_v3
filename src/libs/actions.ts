'use server'

import { supabase } from '@/libs/supabase';

export async function getCurrentPart1Category(): Promise<{ category: string }[]> {
    try {
        let { data, error } = await supabase
            .from('v3_part1_category')
            .select('category')
            .eq('type', 'CURRENT');

        if (error) {
            console.error("Supabase error (getCurrentPart1Category):", error);
            return [];
        }

        return data ?? [];
    } catch (error) {
        console.error("Unexpected error (getCurrentPart1Category):", error);
        return [];
    }
}

export async function getCurrentPart2(): Promise<{ topic: string }[]> {
    try {
        let { data, error } = await supabase
            .from('v3_part2_topic')
            .select('topic')
            .eq('type', 'CURRENT')
            .limit(20);

        if (error) {
            console.error("Supabase error (getCurrentPart2):", error);
            return [];
        }

        return data ?? [];
    } catch (error) {
        console.error("Unexpected error (getCurrentPart2):", error);
        return [];
    }
}

export async function getAllPart1Categories(): Promise<{ category: string; type: string | null }[]> {
    try {
        let { data, error } = await supabase
            .from('v3_part1_category')
            .select('category, type');

        if (error) {
            console.error("Supabase error (getAllPart1Categories):", error);
            return [];
        }

        return data ?? [];
    } catch (error) {
        console.error("Unexpected error (getAllPart1Categories):", error);
        return [];
    }
}

export async function getPart1QuestionsByCategory(category: string): Promise<{ topic: string; answer: string | null; tip: string | null; v3_part1_category: { type: string | null } }[]> {
    try {
        let { data, error } = await supabase
            .from('v3_part1_topic')
            .select('topic, answer, tip, v3_part1_category(type)')
            .eq('category', category);

        if (error) {
            console.error("Supabase error (getPart1QuestionsByCategory):", error);
            return [];
        }

        return data as unknown as { topic: string; answer: string | null; tip: string | null; v3_part1_category: { type: string | null } }[];
    } catch (error) {
        console.error("Unexpected error (getPart1QuestionsByCategory):", error);
        return [];
    }
}

export async function getPart2TopicsByCategory(category: string): Promise<{ topic: string, type: string | null }[]> {
    try {
        let { data, error } = await supabase
            .from('v3_part2_topic')
            .select('topic, type')
            .eq('category', category);

        if (error) {
            console.error("Supabase error (getPart2TopicsByCategory):", error);
            return [];
        }

        return data ?? [];
    } catch (error) {
        console.error("Unexpected error (getPart2TopicsByCategory):", error);
        return [];
    }
}

export async function getPart2TopicByTopic(topic: string): Promise<{ topic: string; subTopics: string[]; part3: string[]; category: string, answer: string | null; tip: string | null; type: string | null } | null> {
    try {
        let { data, error } = await supabase
            .from('v3_part2_topic')
            .select('topic, subTopics, part3, category, tip, answer, type')
            .eq('topic', topic)
            .single();

        if (error) {
            console.error("Supabase error (getPart2TopicByTopic):", error);
            return null;
        }

        return data ?? null;
    } catch (error) {
        console.error("Unexpected error (getPart2TopicByTopic):", error);
        return null;
    }
}