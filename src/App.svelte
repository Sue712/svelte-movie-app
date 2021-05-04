<script>
    import { fade } from "svelte/transition";
    import Router, { location } from "svelte-spa-router";
    import routes from "~/routes";
    import Header from "~/components/Header.svelte";
    import Footer from "~/components/Footer.svelte";
</script>

<Header />
<!-- 일반요소에만 in:fade붙일 수 있음 -->
{#key $location}
    <div in:fade>
        <Router {routes} restoreScrollState={true} />
    </div>
{/key}
<Footer />
