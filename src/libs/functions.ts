
export const encodeURLSegment = (segment: string): string => {
    if (!segment) return '';
    return segment.replace(/\s+/g, '-');
}

export const decodeURLSegment = (segment: string): string => {
    if (!segment) return '';
    return segment.replace(/-/g, ' ');
}