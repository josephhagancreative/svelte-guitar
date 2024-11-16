<div class="container">
  <h4 class="label">Number of Frets:</h4>
  <select id="frets" name="frets" class="input" bind:value={value} >
    {#each frets as fret}
    <option value={fret} class="option">{fret}</option>
    {/each}
  </select>
</div>

<script lang="ts">
  let { value = $bindable(24) }: {value: number} = $props();  
   let frets = Array.from({ length: 25 }, (_, i) => i);
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
    width: 150px;
    cursor: pointer;
  }
.option {
    font-size: 14px;
    background-color: var(--lighter-grey);
  }
</style>