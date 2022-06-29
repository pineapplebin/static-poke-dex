<script lang="ts">
  import 'normalize.css';

  import G7Data from '../data/gen-7.json';
  import G8Data from '../data/gen-8.json';

  import PokeTable from './components/PokeTable.svelte';
</script>

<h2>List of Pokemon by availability</h2>

<PokeTable title="Generation 7" head={G7Data.head} data={G7Data.body} />

<PokeTable title="Generation 8" head={G8Data.head} data={G8Data.body} />
