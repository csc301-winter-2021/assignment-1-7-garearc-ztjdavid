<template>
  <div class="container-md">
<!--    header-->
    <div class="row header">
      <div class="col col-md align-items-center">
        <h1 class="display-1">Checkout</h1>
      </div>
    </div>
<!--    body-->
    <div class="row body">
<!--      left part-->
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Shopping Cart</h5>
            <hr />
            <ul class="list-group">
              <li v-for="item in items" :key="item.name" class="list-group-item">
                <div class="row justify-content-center">
                  <div class="col col-md-1">
                    <font-awesome-icon :icon="item.icon" />
                  </div>
                  <div class="col col-md-2">{{ item.name }}</div>
                  <div class="col col-md-1">q:{{item.quantity }}</div>
                  <div class="col col-md-1">
                    <button class="btn btn-primary btn-sm"
                            @click="AddQ(item)">+</button>
                  </div>
                  <div class="col col-md-1">
                    <button class="btn btn-primary btn-sm"
                            :disabled="CannotDrop(item.quantity)"
                            @click="DropQ(item)">-</button>
                  </div>
                  <div class="col col-md-1">
                    <button class="btn btn-danger btn-sm"
                            @click="DelItem(item)">delete</button>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
<!--      right part-->
      <div class="col-md-4">

      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ShoppingCart.ts"/>

<style scoped lang="scss">
.header {
  margin: 5%;
  border: gray 2px solid;
  h1 {
    font-weight: bolder;
  }
}

</style>
