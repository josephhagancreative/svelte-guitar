<div class="container">
  {#each string.notes as note }
    <div class="note {note.note.replace('#', 'sharp')} {note.isSelected ? '' : 'inactive'}">{note.note}</div>
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
    padding: 0.5rem;
    min-width: 25px;
    width: 25px;
    overflow: hidden;
    border: 1px solid var(--dark-grey);
    border-right: 2px solid var(--off-black);
    background-color: transparent;

    &:first-child {
      min-width: 10px;
      width: 10px;
      border-right: 4px double var(--black);

    }
    &:last-child {
      border-right: none;
    }

    &.A {
      background-color: var(--note-A);
    }
    &.Asharp {
      background-color: var(--note-Asharp);
    }
    &.B {
  background-color: var(--note-B);
}
&.C {
  background-color: var(--note-C);
}
&.Csharp {
  background-color: var(--note-Csharp);
}
&.D {
  background-color: var(--note-D);
}
&.Dsharp {
  background-color: var(--note-Dsharp);
}
&.E {
  background-color: var(--note-E);
}
&.F {
  background-color: var(--note-F);
}
&.Fsharp {
  background-color: var(--note-Fsharp);
}
&.G {
  background-color: var(--note-G);
}
&.Gsharp {
  background-color: var(--note-Gsharp);
}
    &.hidden {
      background-color: transparent;
    }

        &.inactive {
      background-color: var(--lighter-grey);
    }
  }
</style>