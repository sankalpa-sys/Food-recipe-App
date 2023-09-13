<script>
  export let title;
  export let quantity;
</script>

<main
  class="h-[75px] bg-gray-100 rounded-lg flex items-center justify-between px-3"
>
  <section class="flex items-center space-x-2">
    <div class="h-[40px] w-[40px]">
      <img
        src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=800"
        class="h-full w-full object-cover rounded-lg"
        alt=""
      />
    </div>
    <p class="font-[600] text-sm">{title}</p>
  </section>

  <p class="font-[400] text-gray-400 text-[14px]">{quantity}</p>
</main>
