<template>
  <div class="container-sm">
<!--    header-->
    <div class="row header">
      <div class="col col-sm align-items-stretch">
        <h1 class="display-1">Checkout</h1>
      </div>
    </div>
<!--    body-->
<!--    add item section-->
    <div class="row justify-content-center">
      <div class="col-md-6 col-12">
        <AddItemSection @load-order="LoadOrderEvent"/>
      </div>
      <div class="col-md-6 col-12">
        <LoadSection />
      </div>
    </div>
<!--    shopping cart and summary-->
    <div class="row justify-content-around">
<!--      left part-->
      <div class="col col-xl-8 col-sm-12">
        <LeftSide />
      </div>
<!--      right part-->
      <div class="col col-xl-4 col-sm-12">
        <RightSide />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ShoppingCart.ts"/>

<style scoped lang="scss">
.header {
  margin: 5% 0 6% 0;
  border: gray 2px solid;
}
</style>
