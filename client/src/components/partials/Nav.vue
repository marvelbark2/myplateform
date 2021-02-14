<template>
  <div class="row">
      <p class="col col-md-2 float-right">
          <button class="btn btn-light btn-sm" type="button" data-toggle="collapse" data-target="#contentId" aria-expanded="false"
                  aria-controls="contentId">
              Users
          </button>
      </p>
      <div class="collapse col col-md-10" id="contentId">
          <ul class="bg-primary text-light">
              <li>Profil</li>
              <li>Logout</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>

</style>