<script>
	import Intro from "../components/sections/Intro.svelte";
	import Skills from "../components/sections/Skills.svelte";
	import Socials from "../components/sections/Socials.svelte";
	import TimeLine from "../components/sections/TimeLine.svelte";
  import { i } from '@inlang/sdk-js'

</script>
<h1>{i('welcome')}</h1>
<Intro/>
<TimeLine/>
<Skills/>
<Socials/>
