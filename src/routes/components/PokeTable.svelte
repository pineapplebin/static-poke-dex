<script lang='ts'>
  import type { TTableHead, TTableRowData } from '../../types/availability';

  export let head: TTableHead[] = [];
  export let data: TTableRowData[] = [];
</script>

<style>
  table {
    margin: auto;
    background: #dcdce7;
    border: 3px solid #88a;
    border-radius: 10px;
    font-size: 14px;
  }

  th {
    background: #ccf;
  }

  tbody > tr {
    background: white;
  }
</style>

<table>
  <thead>
  <tr>
    <th>#</th>
    <th>Icon</th>
    <th>Name</th>
    {#each head as h}
      <th colspan={h.span}>gen {h.name}</th>
    {/each}
  </tr>
  </thead>
  <tbody></tbody>
</table>
