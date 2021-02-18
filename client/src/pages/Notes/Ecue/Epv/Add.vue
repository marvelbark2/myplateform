<template>
  <div>
    <div class="row">
      <div class="col-md-6 border">
        <ul class="filter__tree">
          <TreeView
            class="item"
            :item="semestres"
            @open-item="openModal"
            @make-folder="makeFolder"
            @add-item="addItem"
          ></TreeView>
        </ul>
      </div>
      <div
        class="col-md-6 border d-flex justify-content-center align-self-center"
      >
        <div v-if="!open" class="text-dark">
          <span>Select ECUE</span>
        </div>
        <div v-else>
          <div v-if="loading">
            <h5>Loading ...</h5>
          </div>
          <div v-else>
            <h5>{{ ecue.ecue.designation }}</h5>
            <br/>
            <span>
              <button type="button" @click="syncecue" class="btn btn-primary btn-sm">
                <i class="fas fa-sync"></i>
              </button>
            </span>
            <hr />
            <div class="list-group">
              <span
                v-for="n in ecue.note"
                :key="n.id"
                class="list-group-item list-group-item-action flex-column align-items-start active"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ ecue.ecue.abbrevation }}</h5>
                  <small>{{ n.epvType.abbrevation }}</small>
                </div>
                <p class="mb-1" v-if="ecue.completed">{{ n.note }}</p>
                <p class="mb-1" v-else>
                  <input type="text" v-model="n.note" style="max-width: 5vw" />
                </p>
                <small>{{ n.epvType.designation }}</small>
              </span>
            </div>
            <hr />
            <button
              v-if="!ecue.completed"
              type="button"
              class="btn btn-secondary text-center"
              @click="patchEpv"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../../../config/axios";
import TreeView from "../../../../components/TreeView";
import $ from "jquery";

export default {
  components: {
    TreeView,
  },
  data() {
    return {
      semestres: {},
      ecue: {},
      open: false,
      loading: false,
    };
  },
  methods: {
    async fetchSemstre() {
      try {
        const fetchSemestre = await axios.get("/api/v1/univ/semestre");
        const SemestreList = fetchSemestre.data.data;
        let dataSeme = [];
        SemestreList.forEach((semestre) => {
          let SemObj = {
            id: semestre.id,
            event: false,
            name: semestre.designation,
            children: semestre.ues.map((ue) => {
              return {
                id: ue.id,
                event: false,
                name: ue.designation,
                children: ue.ecues.map((ecue) => {
                  return {
                    id: ecue.id,
                    name: ecue.abbrevation,
                    event: true,
                  };
                }),
              };
            }),
          };
          dataSeme.push(SemObj);
        });
        const data = {
          name: "Semesters",
          event: false,
          children: dataSeme,
        };
        this.semestres = data;
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
        title: "EPV Add",
        description: "Adding Epv marks for ECUEs",
      });
    },

    async syncecue() {
      try {
        await axios.get(
          `/api/v1/univ/note/epv-note/${this.ecue.ecue.id}`
        );
        await this.$swal.fire({
          title: "Success!",
          text: "ECUE Data Synchonized",
          icon: "success",
          confirmButtonText: "Close",
        });
      } catch (error) {
        this.$swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    },

    async openModal(ecueId) {
      try {
        this.loading = true;
        this.open = false;
        const fetchData = await axios.get(
          `/api/v1/univ/note/epv/form/${ecueId}`
        );
        this.ecue = fetchData.data.data;
        this.loading = false;
        this.open = true;
        console.log(this.ecue);
        $("#myModal").modal("show");
      } catch (error) {
        console.error(error);
      }
    },

    async patchEpv() {
      try {
        for (const n of this.ecue.note) {
          await axios.patch(`/api/v1/univ/note/epv`, {
            ...n,
            epv_type_id: n.epvType.id
          });
        }
       await this.$swal.fire({
          title: "Success!",
          text: "EPV Data Synchonized",
          icon: "success",
          confirmButtonText: "Close",
        });
      } catch (error) {
        this.$swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    },
    makeFolder: function (item) {
      return item;
    },
    addItem: function (item) {
      return item;
    },
  },
  mounted() {
    this.sendMetaData();
    this.fetchSemstre();
  },
};
</script>

<style>
</style>