import type { Note, Tuning } from '$lib/types/guitar';

export const TUNINGS = ['E Standard', 'E Half Step Down', 'Drop D'];

export const NOTES: Note[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export const TUNING_STRINGS: Record<Tuning, Note[]> = {
	'E Standard': ['E', 'A', 'D', 'G', 'B', 'E'],
	'E Half Step Down': ['D#', 'G#', 'C#', 'F#', 'A#', 'D#'],
	'Drop D': ['D', 'A', 'D', 'G', 'B', 'E']
};
