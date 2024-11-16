<div class="container">
  <h1>Svelte Guitar</h1>
  <div class="select-container">
    <TuningSelect bind:value={selectedTuning} />
    <RootNoteSelect bind:value={selectedRootNote} />
    <ScaleSelect bind:value={selectedScale} />
  </div>
  <Fretboard {selectedTuning} {selectedRootNote} {selectedScale} />
</div>

<script lang="ts">
	import Fretboard from "$lib/components/fretboard.svelte";
	import RootNoteSelect from "$lib/components/rootNoteSelect.svelte";
	import ScaleSelect from "$lib/components/scaleSelect.svelte";
	import TuningSelect from "$lib/components/tuningSelect.svelte";
	import type { Note, Scale, Tuning } from "$lib/types/guitar";
  
  let selectedTuning: Tuning = $state('E Standard')
  let selectedRootNote: Note = $state('C')
  let selectedScale: Scale | undefined = $state()
</script>

<style>
  .select-container {
    display: flex;
  }
</style>