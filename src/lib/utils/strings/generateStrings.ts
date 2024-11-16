import { NOTES, TUNING_STRINGS } from '$lib/const/strings';
import type { GuitarString, Note, Tuning } from '$lib/types/guitar';

export function generateStrings(tuning: Tuning, frets: number) {
	const selectedTuning = TUNING_STRINGS[tuning].reverse();
	const strings: GuitarString[] = [];
	for (const string of selectedTuning) {
		strings.push({ name: string, notes: generateString(string, frets) });
	}
	return strings;
}

function generateString(rootNote: Note, frets: number) {
	const startIndex = NOTES.findIndex((note) => note === rootNote);
	let currentNoteIndex = startIndex;
	const notes: Note[] = [];
	for (let i = startIndex; i < startIndex + frets; i++) {
		if (currentNoteIndex >= NOTES.length) {
			currentNoteIndex = 0;
		}
		notes.push(NOTES[currentNoteIndex]);
		currentNoteIndex++;
	}
	return notes;
}
