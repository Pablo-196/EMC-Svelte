<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte"
</script>

<Header/>
<!-- <div id="loading-screen">
    <div class="loader"> -->
      <!-- You can add multiple elements here for more complex animations -->
      <!-- <div class="spinner"></div>
    </div>
  </div> -->
<slot />
<Footer/>