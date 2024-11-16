<div class="container">
  <h4 class="label">Scale:</h4>
  <select id="scale" name="scale" class="input" bind:value={value} >
    <option value={null} class="option">None</option>
    {#each SCALES as scale}
    <option value={scale} class="option">{scale}</option>
    {/each}
  </select>
</div>

<script lang="ts">
	import {  SCALES } from "$lib/const/strings";
	import type {  Scale } from "$lib/types/guitar";
  let { value = $bindable() }: {value?: Scale} = $props();  
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