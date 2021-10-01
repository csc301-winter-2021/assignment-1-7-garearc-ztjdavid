<template>
  <div class="card">
    <h3 class="card-title title">Add Item</h3>
    <hr />
    <div class="card-body">
      <form>
        <div class="mb-3">
<!--          row 1-->
          <div class="row justify-content-start mb-3">
            <div class="col-3 col-sm-12 col-md-3">
              <label for="row-1-item" class="col-form-label">Item</label>
            </div>
            <div class="col-9 col-sm-12 col-md-9">
              <input type="text" id="row-1-item"
                     required
                     class="col-form-label form-control"
                     placeholder="(Name of the item)"
                     v-model="currItem.name">
            </div>
          </div>
<!--          row 2-->
          <div class="row justify-content-start mb-3">
            <div class="col-3 col-sm-12 col-md-3">
              <label for="row-2-price" class="col-form-label">Price</label>
            </div>
            <div class="col-9 col-sm-12 col-md-9">
              <input type="number" step="0.01" min="0.00" id="row-2-price" class="col-form-label form-control" placeholder="price" v-model="currItem.price">
            </div>
          </div>
<!--          row 3-->
          <div class="row justify-content-start mb-3">
            <div class="col-3 col-sm-12 col-md-3">
              <label for="row-3-quantity" class="col-form-label">Quantity</label>
            </div>
            <div class="col-9 col-sm-12 col-md-9">
              <input type="number" min="1" id="row-3-quantity" class="col-form-label form-control" placeholder="quantity" v-model="currItem.quantity">
            </div>
          </div>
<!--          row 4-->
          <div class="row justify-content-start mb-3">
            <div class="col-3 col-sm-12 col-md-3">
              <label class="col-form-label" for="row-4-istaxed">
                Include tax
              </label>
            </div>
            <div class="col-9 col-sm-12 col-md-9 align-self-center">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="row-4-istaxed" v-model="currItem.isTaxed">
              </div>
            </div>
          </div>
<!--          row 5-->
          <div class="row justify-content-start mb-3">
            <div class="col-3 col-sm-12 col-md-3">
              <label for="row-5-discount" class="col-form-label">Discount</label>
            </div>
            <div class="col-9 col-sm-12 col-md-9">
              <input type="number" step="0.01" min="0.00" max="1.00" id="row-5-discount" class="col-form-label form-control" placeholder="discount" v-model="currItem.discount">
            </div>
          </div>
<!--          row 6-->
          <div class="row justify-content-end mb-3">
            <button type="submit" class="btn btn-primary" @click="AddItem">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./AddItemSection.ts"/>

<style scoped lang="scss">
.title {
  text-decoration: underline;
}
.card {
  width: auto;
  height: auto;
  .card-body {
    margin: 1%;
    text-align: start;
  }
}
.checkbox {
  margin-left: 18%;
}
</style>
