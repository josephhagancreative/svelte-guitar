<div class="container">
  {#each strings as string}
  <String {string} />
  {/each}
  <div class="fret-wrapper">
    {#each frets as fret}
    <p class="fret {isDottedFret(fret) ? 'dotted' : ''}">{fret}</p>
    {/each}
  </div>
</div>

<script lang="ts">
	import type { GuitarString, Note, Scale, Tuning } from "$lib/types/guitar";
	import { generateStrings } from "$lib/utils/strings/generateStrings";
	import { isDottedFret } from "$lib/utils/strings/isDottedFret";
	import String from "./string.svelte";

  let { strings, selectedFrets }: {
    strings: GuitarString[]
    selectedFrets: number
  } = $props()

  let frets = $derived(Array.from({ length: selectedFrets + 1 }, (_, i) => i))
</script>

<style>
  .container {
    position: relative;
    margin: 1rem;
    margin-left: 1.5rem;
    border: 2px solid var(--black);
    width: max-content;
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
    width: 25px;
    height: 3px;
    overflow: hidden;
    border: 1px solid var(--dark-grey);
    border-right: 2px solid var(--off-black);
    background-color: var(--off-white);

    &:first-child {
      min-width: 10px;
      width: 10px;
      border-right: 4px double var(--black);

    }
    &:last-child {
      border-right: none;
    }
    &.dotted {
      opacity: 0.7;
      &::before {
        content: "";
        height: 10px;
        width: 10px;
        background-color: var(--off-black);
        position: absolute;
        top: 103px;
        z-index: 100;
        border-radius: 10px;
      }
    }
        &:nth-child(13),
        &:nth-child(25) {
          &.dotted {
            &::before {
              top: 67px;
            }
            &::after {
              content: "";
              height: 10px;
              width: 10px;
              background-color: var(--off-black);
              position: absolute;
              top: 139px;
              z-index: 100;
              border-radius: 10px;
            }
          }
      }
  }
}
</style>