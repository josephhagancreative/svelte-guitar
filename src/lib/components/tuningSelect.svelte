<div class="container">
  <h4 class="label">Tuning:</h4>
  <select id="tuning" name="tuning" class="input" bind:value={value} >
    {#each TUNINGS as tuning}
    <option value={tuning} class="option">{tuning}</option>
    {/each}
  </select>
</div>

<script lang="ts">
	import { TUNINGS } from "$lib/const/strings";
  let { value = $bindable(), ...props } = $props();  
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