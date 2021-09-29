<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title title">Summary</h3>
      <div class="row justify-content-center">
        <div class="col-sm-auto">
          <button class="btn btn-primary" @click="uploadOrder">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./RightSide.ts"/>

<style scoped lang="scss">
.title {
  text-decoration: underline;
}
</style>
