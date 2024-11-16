<div class="container">
  <h4 class="label">Root Note:</h4>
  <select id="root-note" name="root-note" class="input" bind:value={value} >
    {#each NOTES as note}
    <option value={note} class="option">{note}</option>
    {/each}
  </select>
</div>

<script lang="ts">
	import { NOTES } from "$lib/const/strings";
	import type { Note } from "$lib/types/guitar";
  let { value = $bindable() }: {value: Note} = $props();  
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