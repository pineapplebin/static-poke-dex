<script lang='ts'>
  import 'normalize.css';
  import PokeTable from './components/PokeTable.svelte';
  import G8Data from '../data/gen-8.json';
</script>

<h2>List of Pokemon by availability</h2>

<PokeTable head={G8Data.head} />
