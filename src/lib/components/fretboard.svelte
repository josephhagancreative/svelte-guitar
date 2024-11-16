<div class="container">
  {#each strings as string}
  <String {string} />
  {/each}
  <div class="fret-wrapper">
    {#each frets as fret}
    <p class="fret">{fret}</p>
    {/each}
  </div>
</div>

<script lang="ts">
	import type { Note, Scale, Tuning } from "$lib/types/guitar";
	import { generateStrings } from "$lib/utils/strings/generateStrings";
	import String from "./string.svelte";

  let { selectedTuning, selectedFrets = 24, selectedRootNote, selectedScale }: {
    selectedTuning: Tuning
    selectedFrets: number
    selectedRootNote: Note
    selectedScale?: Scale
  } = $props()

  const strings = $derived(generateStrings(selectedTuning, selectedFrets + 1, selectedRootNote, selectedScale))

  let frets = $derived(Array.from({ length: selectedFrets + 1 }, (_, i) => i))
</script>

<style>
  .container {
    margin: 1rem;
    margin-left: 1.5rem;
    border: 2px solid var(--black);
    max-width: 90%;
    overflow-x: auto;
    scrollbar-width: thin; 
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}

.fret-wrapper {
  display: flex;
  align-items: center;


  > .fret {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    min-width: 25px;
    height: 3px;
    border: 1px solid var(--dark-grey);
    border-right: 2px solid var(--off-black);
    background-color: var(--off-white);

        &:first-child {
      min-width: 10px;
      border-right: 4px double var(--black);

    }
    &:last-child {
      border-right: none;
    }
  }
}
</style>