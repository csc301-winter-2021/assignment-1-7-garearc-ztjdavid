<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title title">Shopping Cart</h3>
      <hr />
      <div class="table-responsive-md">
        <table class="table table-striped align-middle">
          <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Taxed</th>
            <th scope="col">Discount</th>
            <th scope="col">Operations</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in order.orderList" :key="item.name">
            <td>
              <div class="row justify-content-start">
                <div class="col-sm-auto">
                  <font-awesome-icon :icon="item.icon"/>
                </div>
                <div class="col-sm-auto">
                  <div>{{ item.name }}</div>
                </div>
              </div>
            </td>
            <td>
              <span>{{ item.price }}</span>
            </td>
            <td>
              <span>{{ item.quantity }}</span>
            </td>
            <td>
              <font-awesome-icon v-if="item.isTaxed" icon="check" class="check"/>
              <font-awesome-icon v-else icon="times" class="cross"/>
            </td>
            <td>
              <span>{{ DiscountFormatter(item.discount) }}</span>
            </td>
            <td>
              <div class="row justify-content-center">
                <div class="col col-xxl col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <button class="btn btn-primary btn-sm"
                          @click="AddQ(item)">+</button>
                </div>
                <div class="col col-xxl col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <button class="btn btn-primary btn-sm"
                          :disabled="CannotDrop(item.quantity)"
                          @click="DropQ(item)">-</button>
                </div>
                <div class="col col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <button class="btn btn-danger btn-sm"
                          @click="DelItem(item)">delete</button>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./LeftSide.ts"/>

<style scoped lang="scss">
@keyframes updated {
  50% {font-weight: bolder; color: crimson}
}

button {
  width: 60px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.title {
  text-decoration: underline;
}
.check {
  color: #42b983;
}
.cross {
  color: crimson;
}
.quantityChanged {
  animation-name: updated;
  animation-duration: 3s;
}

</style>
