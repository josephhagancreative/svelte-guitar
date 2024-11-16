<div class="container">
  <h1>Svelte Guitar</h1>
  <TuningSelect bind:value={selectedTuning} />
  <Fretboard {selectedTuning} />
  {selectedTuning}
</div>

<script lang="ts">
	import Fretboard from "$lib/components/fretboard.svelte";
	import TuningSelect from "$lib/components/tuningSelect.svelte";
	import type { Tuning } from "$lib/types/guitar";
  
  let selectedTuning: Tuning = $state('E Standard')
</script>

<style global>
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--black);

  /* vars */
  --lighter-grey: #e1e1e1;
  --light-grey: #ccc;
  --black: #0a0a0a;
}
</style>