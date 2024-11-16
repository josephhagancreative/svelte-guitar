<div class="container">
  {#each strings as string}
  <String {string} />
  {/each}
</div>

<script lang="ts">
	import type { Tuning } from "$lib/types/guitar";
	import { generateStrings } from "$lib/utils/strings/generateStrings";
	import String from "./string.svelte";

  let { selectedTuning }: {
    selectedTuning: Tuning
  } = $props()

  const strings = $derived(generateStrings(selectedTuning, 24))
</script>

<style>
  .container {
    margin: 1rem;
    margin-left: 1.5rem;
    border: 2px solid var(--black)
  }
</style>