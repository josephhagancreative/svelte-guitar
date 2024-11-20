import { NOTES, SCALE_NOTES, TUNING_STRINGS } from '$lib/const/strings';
import type { GuitarString, Note, NoteObj, Scale, Tuning } from '$lib/types/guitar';

export function generateStrings(
	tuning: Tuning,
	frets: number,
	rootNote: Note,
	scale?: Scale,
	chordNotes?: Note[]
) {
	const selectedTuning = [...TUNING_STRINGS[tuning]].reverse();
	const scaleNotes = scale ? SCALE_NOTES[rootNote][scale] : undefined;
	const strings: GuitarString[] = [];
	for (const string of selectedTuning) {
		strings.push({ name: string, notes: generateNotes(string, frets, scaleNotes, chordNotes) });
	}
	return strings;
}

function generateNotes(rootNote: Note, frets: number, scaleNotes?: Note[], chordNotes?: Note[]) {
	const startIndex = NOTES.findIndex((note) => note === rootNote);
	let currentNoteIndex = startIndex;
	const notes: NoteObj[] = [];
	for (let i = startIndex; i < startIndex + frets; i++) {
		if (currentNoteIndex >= NOTES.length) {
			currentNoteIndex = 0;
		}
		const currentNote = NOTES[currentNoteIndex];
		const note: NoteObj = {
			note: currentNote,
			isSelected: scaleNotes
				? chordNotes
					? chordNotes.includes(currentNote)
					: scaleNotes.includes(currentNote)
				: true,
			isVisible: true
		};
		notes.push(note);
		currentNoteIndex++;
	}
	return notes;
}
