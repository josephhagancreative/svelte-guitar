export type Tuning = 'E Standard' | 'E Half Step Down' | 'Drop D';

export type Note = 'A' | 'A#' | 'B' | 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#';

export type GuitarString = {
	name: Note;
	notes: Note[];
};
