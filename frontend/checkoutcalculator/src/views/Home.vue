<template>
  <div>
    <button class="btn btn-danger" @click="test">B</button>
    <ShoppingCart :order="Order" @load-order="LoadOrder"/>
  </div>
</template>

<script lang="ts" src="./Home.ts" />

<style lang="scss">
</style>
