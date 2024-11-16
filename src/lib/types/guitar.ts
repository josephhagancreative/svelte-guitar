export type Tuning = 'E Standard' | 'E Half Step Down' | 'Drop D';

export type Note = 'A' | 'A#' | 'B' | 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#';

export type Scale = 'Major' | 'Minor';

export type NoteObj = {
	note: Note;
	isVisible: boolean;
	isSelected: boolean;
};

export type GuitarString = {
	name: Note;
	notes: NoteObj[];
};
