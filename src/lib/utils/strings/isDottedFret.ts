import { DOTTED_FRETS } from '$lib/const/strings';

export function isDottedFret(fret: number) {
	return DOTTED_FRETS.includes(fret);
}
