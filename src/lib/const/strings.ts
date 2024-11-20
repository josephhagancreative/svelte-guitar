import type { Chord, Note, Scale, Tuning } from '$lib/types/guitar';

export const TUNINGS = ['E Standard', 'E Half Step Down', 'Drop D'];

export const NOTES: Note[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const SCALES: Scale[] = ['Major', 'Minor'];

export const TUNING_STRINGS: Record<Tuning, Note[]> = {
	'E Standard': ['E', 'A', 'D', 'G', 'B', 'E'],
	'E Half Step Down': ['D#', 'G#', 'C#', 'F#', 'A#', 'D#'],
	'Drop D': ['D', 'A', 'D', 'G', 'B', 'E']
};

export const SCALE_NOTES: Record<Note, Record<Scale, Note[]>> = {
	A: {
		Major: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
		Minor: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
	},
	'A#': {
		Major: ['A#', 'C', 'D', 'D#', 'F', 'G', 'A'],
		Minor: ['A#', 'C', 'C#', 'D#', 'F', 'F#', 'G#']
	},
	B: {
		Major: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
		Minor: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A']
	},
	C: {
		Major: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
		Minor: ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']
	},
	'C#': {
		Major: ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'],
		Minor: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B']
	},
	D: {
		Major: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
		Minor: ['D', 'E', 'F', 'G', 'A', 'A#', 'C']
	},
	'D#': {
		Major: ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D'],
		Minor: ['D#', 'F', 'F#', 'G#', 'A#', 'B', 'C#']
	},
	E: {
		Major: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
		Minor: ['E', 'F#', 'G', 'A', 'B', 'C', 'D']
	},
	F: {
		Major: ['F', 'G', 'A', 'A#', 'C', 'D', 'E'],
		Minor: ['F', 'G', 'G#', 'A#', 'C', 'C#', 'D#']
	},
	'F#': {
		Major: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
		Minor: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E']
	},
	G: {
		Major: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
		Minor: ['G', 'A', 'A#', 'C', 'D', 'D#', 'F']
	},
	'G#': {
		Major: ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'G'],
		Minor: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#']
	}
};

export const INTERVALS: Record<Chord, number[]> = {
	Major: [0, 4, 7], // Root, Major 3rd, Perfect 5th
	Minor: [0, 3, 7], // Root, Minor 3rd, Perfect 5th
	'Major 7th': [0, 4, 7, 11], // Root, Major 3rd, Perfect 5th, Major 7th
	'Minor 7th': [0, 3, 7, 10], // Root, Minor 3rd, Perfect 5th, Minor 7th
	Diminished: [0, 3, 6], // Root, Minor 3rd, Diminished 5th
	Dominant: [0, 4, 7, 10], // Root, Major 3rd, Perfect 5th, Minor 7th
	'Half-Diminished': [0, 3, 6, 10] // Root, Minor 3rd, Diminished 5th, Minor 7th
};

export const DOTTED_FRETS = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
