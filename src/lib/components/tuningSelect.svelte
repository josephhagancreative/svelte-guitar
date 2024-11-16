<select id="tuning" name="tuning" class="input" bind:value={value} >
    {#each TUNINGS as tuning}
    <option value={tuning} class="option">{tuning}</option>
    {/each}
</select>

<script lang="ts">
	import { TUNINGS } from "$lib/const/strings";
  let { value = $bindable(), ...props } = $props();  
</script>
<style scoped>
.input {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid var(--light-grey);
    width: 200px;
    margin: 1rem;
    cursor: pointer;
  }
.option {
    font-size: 14px;
    background-color: var(--lighter-grey);
  }
</style>