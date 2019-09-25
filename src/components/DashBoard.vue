<template>
  <div id="dash-board">

    <h1>record list</h1>
    <vue-good-table :columns="columns" :rows="rows" @on-row-click="showModal" />

    <modal v-if="showEditModal" @close="showEditModal = false">
      <h3 slot="header">{{modalTitle}}</h3>
      <div slot="body">
        <div v-for="key in editItems" v-bind:key="key.id" class="form-group" >
          <label class="col-xs-2">{{key}}</label><input class="form-control col-xs-10" type="text" v-model="modalItem[key]" />
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import modal from './RecordDetail.vue'
export default {
  components: {
    modal
  },
  name: 'DashBoard',
  data: function () {
    return {
      showEditModal: false,
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Type',
          field: 'type'
        },
        {
          label: 'Contents',
          field: 'contents'
        },
        {
          label: 'TTL',
          field: 'ttl'
        }
      ],
      rows: [
        { id: 0, name: 'ok.com', type: 'A', contents: '1.1.1.1', ttl: 300 },
        { id: 1, name: 'bomber.com', type: 'A', contents: '2.2.2.2', ttl: 300 }
      ]
    }
  },
  methods: {
    showModal: function (entry) {
      this.showEditModal = true
      this.modalTitle = 'Edit'
      this.modalItem = entry['row']
      this.editItems = ['name', 'type', 'contents', 'ttl']
    }
  }
}
</script>
