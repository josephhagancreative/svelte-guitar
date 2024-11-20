<div class="container">
  <h4 class="label">Chord:</h4>
  <select id="chord" name="chord" class="input" bind:value={value} >
    <option value={null} class="option">None</option>
    {#each chordsFromScale as chord}
    <option value={`${chord.note} ${chord.chord}`} class="option">{chord.note} {chord.chord}</option>
    {/each}
  </select>
</div>

<script lang="ts">
	import type {  Chord, Note, Scale, } from "$lib/types/guitar";
  let { value = $bindable(), chordNotes = $bindable(), scaleNotes, selectedRootNote, selectedScale }: {value?: Chord, chordNotes: Note[], scaleNotes?: Note[], selectedRootNote: Note, selectedScale: Scale | undefined} = $props();  
	import { INTERVALS, NOTES, SCALE_NOTES } from "$lib/const/strings";

  function getChordsFromScale(rootNote: Note, scale: Scale | undefined): { note: Note; chord: Chord }[] {
    if (!scale) return [];

    const scaleNotes = SCALE_NOTES[rootNote][scale];
    if (!scaleNotes) return [];

    const chordTypes: Chord[] = scale === "Major"
      ? ["Major", "Minor", "Minor", "Major", "Major", "Minor", "Diminished"]
      : ["Minor", "Diminished", "Major", "Minor", "Minor", "Major", "Major"]; // Minor scale

    return scaleNotes.map((note, index) => ({
      note,
      chord: chordTypes[index % chordTypes.length],
    }));
  }

	function getChordNotes(rootNote: Note, chord: Chord): Note[] {
		const intervalPattern = INTERVALS[chord];
		if (!intervalPattern) return [];

		const rootIndex = NOTES.indexOf(rootNote);
		if (rootIndex === -1) return [];

		return intervalPattern.map(
			(interval) => NOTES[(rootIndex + interval) % NOTES.length]
		);
	}

  let chordsFromScale = $derived(getChordsFromScale(selectedRootNote, selectedScale));

  $effect(() => {
    if (value) {
      chordNotes = getChordNotes(value.split(' ')[0] as Note, value.split(' ')[1] as Chord)
    } else {
      chordNotes = []
    }
  } )
</script>
<style  >
  .container {
    display: flex;
    flex-direction: column;
    gap: none;
    margin: 1rem;

    > .label {
      margin: 0.5rem 0;
    }
  }
  
.input {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid var(--light-grey);
    width: 200px;
    cursor: pointer;
  }
.option {
    font-size: 14px;
    background-color: var(--lighter-grey);
  }
</style>