<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div v-for="semestre in semestres" v-bind:key="semestre.id" class="card">
        <div class="card-header" v-bind:id="'heading' + semestre.id">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              v-bind:data-target="'#collapse-' + semestre.id"
              aria-expanded="true"
              v-bind:aria-controls="'#collapse-' + semestre.id"
            >
              {{ semestre.designation }}
            </button>
          </h2>
        </div>

        <div
          v-bind:id="'collapse-' + semestre.id"
          class="collapse"
          v-bind:aria-labelledby="'heading' + semestre.id"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul v-if="semestre.ues.length > 0" class="list-group">
              <li
                v-for="ue in semestre.ues"
                v-bind:key="ue.id"
                class="list-group-item"
              >
                <span v-on:click="openModel(ue.id)">
                  {{ ue.designation }}
                </span>
              </li>
            </ul>
            <span v-else>No record found</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      id="myModal"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Data</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <table v-if="Object.keys(ues).length > 0" class="table table-hover">
              <thead>
                <tr>
                  <th>Ecue</th>
                  <th>EPV</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(enote, ecue) in ues">
                  <tr v-for="(note, i) in enote" :key="note.id">
                    <template v-if="i == 0">
                      <td v-bind:rowspan="enote.length">
                        {{ ecue }}
                      </td>
                      <td>{{ enote[i].epvType.abbrevation }}</td>
                      <td>{{ enote[i].note }}</td>
                    </template>
                    <template v-else>
                      <td>{{ enote[i].epvType.abbrevation }}</td>
                      <td>{{ enote[i].note }}</td>
                    </template>
                  </tr>
                </template>
              </tbody>
            </table>
            <div v-else>
                <span class="text-center">No record found</span>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../../../config/axios";
import $ from "jquery";
import _ from "lodash";
export default {
  data() {
    return {
      semestres: [],
      ues: [],
    };
  },
  methods: {
    async fetchSemstre() {
      try {
        const fetchSemestre = await axios.get("/api/v1/univ/semestre");
        const SemestreList = fetchSemestre.data.data;
        this.semestres = SemestreList;
      } catch (error) {
        this.$swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    },
    async openModel(ueid) {
      try {
        const fetchUeNote = await axios.get(
          `/api/v1/univ/note/ue/list/${ueid}`
        );
        const ueList = fetchUeNote.data.data;
        const group = _.groupBy(ueList, (ue) => ue.ecue.abbrevation);
        this.ues = group;
        console.log(group);
        $("#myModal").modal();
      } catch (error) {
        this.$swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    },
    sendMetaData() {
      this.$emit("getMetaData", {
        title: "EPV List",
        description: "List of EPVs with UES",
      });
    },
  },
  mounted() {
    this.fetchSemstre();
    this.sendMetaData();
  },
};
</script>

<style>
</style>