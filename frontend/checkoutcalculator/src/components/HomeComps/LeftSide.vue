<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title title">Shopping Cart</h3>
      <hr />
      <div class="table-responsive-sm">
        <table class="table table-striped align-middle">
          <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Operations</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>
              <div class="row justify-content-center">
                <div class="col-sm-auto">
                  <font-awesome-icon icon="coffee"/>
                </div>
                <div class="col-sm-auto">
                  <div>{{ item.name }}</div>
                </div>
              </div>
            </td>
            <td>
              <span>{{ item.quantity }}</span>
            </td>
            <td>
              <div class="row justify-content-center">
                <div class="col-sm-auto col-md-4 col-lg-3 col-xl-3">
                  <button class="btn btn-primary btn-sm"
                          @click="AddQ(item)">+</button>
                </div>
                <div class="col-sm-auto col-md-4 col-lg-3 col-xl-3">
                  <button class="btn btn-primary btn-sm"
                          :disabled="CannotDrop(item.quantity)"
                          @click="DropQ(item)">-</button>
                </div>
                <div class="col-sm-auto col-md-4 col-lg-3 col-xl-3">
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
th {
}
button {
  width: 60px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.title {
  text-decoration: underline;
}

</style>
