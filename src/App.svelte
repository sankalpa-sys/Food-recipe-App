<script>
  import "./app.css";
  import { onMount } from "svelte";
  import Home from "./pages/Home.svelte";
  import { Router, Route, navigate, useLocation } from "svelte-navigator";
  import SingleRecipee from "./pages/SingleRecipee.svelte";
  import Register from "./pages/Register.svelte";
  import Login from "./pages/Login.svelte";
  import { miniAppInitializer } from "./miniAppInitializer";
  import SplashScreen from "./pages/SplashScreen.svelte";
  import NoData from "./components/NoData.svelte";
  let foods = [];
  let loading = false;
  let user;
  let loadingPage = false;
  let search = false;
  let category = false;
  let categoryName = "";


  const getFoods = async (searchText, cat) => {
    loading = true;
    if (searchText !== "") {
      search = true;
      category = false;
    }
    if (cat) {
      category = true;
      search = false;
      categoryName = cat;
    } else {
      category = true;
      search = false;
      categoryName = "all";
    }
    try {
      if (!cat && !searchText) {
        categoryName = "all";
      }
      const res = await fetch(
        cat
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
          : `https://www.themealdb.com/api/json/v1/1/search.php?s=${
              searchText ? searchText : ""
            }`
      );
      const data = await res.json();
      if (!data.meals) {
        foods = [];
        loading = false;
        return;
      }

      foods = data.meals;
      loading = false;
    } catch (error) {
      console.log(error);
      loading = false;
    }
  };

  onMount(() => getFoods());

  const handleInit = () => {
    loadingPage = true;
    miniAppInitializer()
      .then((data) => {
        if (data.user_profile) {
          user = data.user_profile;
        }
        loadingPage = false;
        // navigate("/home", {replace: true})
      })
      .catch((e) => {
        console.log(e);
        loadingPage = false;
      });
  };

  onMount(() => handleInit());
</script>

{#if loadingPage === true}
  <NoData message="" />
{:else}
  <Router>
    <Route path="/"><SplashScreen /></Route>
    <main class=" px-[13px] md:py-20  md:max-w-xl max-w-full mx-auto font-poppins">
      <Route path="/home">

          <Home {foods} {loading} {getFoods} {user} {categoryName} />

      </Route>
      <Route path="/recipee/:id">

          <SingleRecipee />

      </Route>
      <Route path="/register">

          <Register />

      </Route>
      <Route path="/login">

          <Login />

      </Route>
    </main>
  </Router>
{/if}
