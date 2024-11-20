<div class="container">
  <h1>Svelte Guitar</h1>
  <div class="select-container">
    <TuningSelect bind:value={selectedTuning} />
    <FretSelect bind:value={selectedFrets} />
    <RootNoteSelect bind:value={selectedRootNote} />
    <ScaleSelect bind:value={selectedScale} />
    <ChordSelect bind:value={selectedChord} bind:chordNotes={chordNotes} {scaleNotes} {selectedRootNote} {selectedScale} />
  </div>
  <Fretboard {strings} {selectedFrets} />
</div>

<script lang="ts">
	import Fretboard from "$lib/components/fretboard.svelte";
	import FretSelect from "$lib/components/fretSelect.svelte";
	import RootNoteSelect from "$lib/components/rootNoteSelect.svelte";
	import ScaleSelect from "$lib/components/scaleSelect.svelte";
	import TuningSelect from "$lib/components/tuningSelect.svelte";
  import ChordSelect from "$lib/components/chordSelect.svelte";
	import type { Chord, Note, Scale, Tuning } from "$lib/types/guitar";
	import { generateStrings } from "$lib/utils/strings/generateStrings";
	import { SCALE_NOTES } from "$lib/const/strings";
  
  let selectedTuning: Tuning = $state('E Standard')
  let selectedFrets: number = $state(24)
  let selectedRootNote: Note = $state('C')
  let selectedScale: Scale | undefined = $state()
  let selectedChord: Chord | undefined = $state()
  let chordNotes: Note[] = $state([])

  $effect(() => {
    selectedRootNote;
    selectedScale;

    selectedChord = undefined 
    chordNotes = []
  })

  const scaleNotes = $derived(selectedScale ? SCALE_NOTES[selectedRootNote][selectedScale] : undefined)

  const strings = $derived(generateStrings(selectedTuning, selectedFrets + 1, selectedRootNote, selectedScale, chordNotes.length > 0 ? chordNotes : undefined))
</script>

<style>
  .select-container {
    display: flex;

    @media  (width < 600px) {
      flex-direction: column;
    }
  }
</style>