<div class="container">
  {#each string.notes as note }
    <div class="note">{note}</div>
  {/each}
</div>

<script lang="ts">
  import type { GuitarString } from "$lib/types/guitar";
  let { string }: {string: GuitarString}  = $props()
</script>

<style scoped>
  .container {
    position: relative;
    display: flex;
  }
  .note {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0.5rem;
    border-right: 2px solid var(--light-grey);

    &:first-child {
      position: absolute;
      left: -30px;
      border-right: none;
    }
    &:last-child {
      border-right: none;
    }
  }
</style>