<template>
  <div class="card">
    <h3 class="card-title title">Load History</h3>
    <hr />
    <div class="card-body">
      <div class="row justify-content-center">
<!--        refresh button-->
        <div class="col-12 col-lg-auto d-flex justify-content-center">
          <button class="btn btn-info" @click="scm.LoadRecords()">
            <font-awesome-icon icon="sync" />
          </button>
        </div>
<!--        drop downs-->
        <div class="col-lg-auto col-12 d-flex justify-content-center">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
              {{ scm.getDropDownSelectedText }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
              <li v-for="record in scm.Records" :key="record">
                <button class="dropdown-item" type="button"
                        @click="updateSelected(record)">{{record.date}}</button>
              </li>
            </ul>
          </div>
        </div>
<!--        load button-->
        <div class="col-lg-auto col-12 d-flex justify-content-center">
          <button class="btn btn-primary" @click="scm.LoadOrder">Load</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./LoadSection.ts"/>

<style scoped lang="scss">
.title {
  text-decoration: underline;
}
button {
  width: auto;
  margin: 1%;
}
</style>
