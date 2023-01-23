<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title>Carreras</v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headersCarrera"
                :items="carreras"
                sort-by="calories"
                class="elevation-3"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Lista de Carreras</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                          Nuevo
                        </v-btn>
                      </template>
                      <v-form
                        v-on:submit.prevent="addCarrera"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Nuevo registro</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="carreraData.carreraNombre"
                                    label="Nombre carrera"
                                    :rules="[
                                      (v) => !!v || 'Debe ingresar un nombre de carrera',
                                      (v) =>
                                        /[aA-zZ]$/.test(v) ||
                                        'Debe ingresar un nombre valido',
                                    ]"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="carreraData.correlativo"
                                    label="Número de correlativo"
                                    :rules="[
                                      (v) => !!v || 'Debe ingresar un número de celular',
                                      (v) =>
                                        /[0-9]$/.test(v) ||
                                        'Debe ingresar un número valido',
                                    ]"
                                    required
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="hideDialogNewCarrera"
                            >
                              Cancelar
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              :disabled="!valid"
                              text
                              type="submit"
                            >
                              Guardar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </v-dialog>
                    <v-dialog v-model="dialogUpdateCarrera" max-width="500px">
                      <v-form
                        v-on:submit.prevent="updateCarrera"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Actualizar registro</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="carreraData.carreraNombre"
                                    label="Nombre carrera"
                                    :rules="[
                                      (v) => !!v || 'Debe ingresar un nombre de carrera',
                                      (v) =>
                                        /[aA-zZ]$/.test(v) ||
                                        'Debe ingresar un nombre valido',
                                    ]"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="carreraData.correlativo"
                                    label="Número de correlativo"
                                    :rules="[
                                      (v) => !!v || 'Debe ingresar un número de celular',
                                      (v) =>
                                        /[0-9]$/.test(v) ||
                                        'Debe ingresar un número valido',
                                    ]"
                                    required
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="hideDialogUpdateCarrera"
                            >
                              Cancelar
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              type="submit"
                              :disabled="!valid"
                            >
                              Guardar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
                  <v-icon small @click="deleteCarrera(item)"> mdi-delete </v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title>Modalidades</v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headersModalidad"
                :items="modalidades"
                sort-by="calories"
                class="elevation-3"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Lista de Modalidades</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialogModalidadCreate" max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                          Nuevo
                        </v-btn>
                      </template>
                      <v-form
                        v-on:submit.prevent="addModalidad"
                        v-model="valid2"
                        lazy-validation
                        ref="form2"
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Nuevo registro</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="modalidadData.nombreModalidad"
                                    label="Nombre de la modalidad"
                                    :rules="[
                                      (v) =>
                                        !!v || 'Debe ingresar un nombre de la modalidad',
                                      (v) =>
                                        /[aA-zZ]$/.test(v) ||
                                        'Debe ingresar una modalidad valida',
                                    ]"
                                    required
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="hideDialogNewModalidad"
                            >
                              Cancelar
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              :disabled="!valid2"
                              text
                              type="submit"
                            >
                              Guardar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </v-dialog>
                    <v-dialog v-model="dialogUpdateModalidad" max-width="500px">
                      <v-form v-on:submit.prevent="updateModalidad"
                       v-model="valid2"
                        lazy-validation
                        ref="form2"
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Actualizar registro</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field
                                    v-model="modalidadData.nombreModalidad"
                                    label="Nombre de la modalidad"
                                     :rules="[
                                      (v) =>
                                        !!v || 'Debe ingresar un nombre de la modalidad',
                                      (v) =>
                                        /[aA-zZ]$/.test(v) ||
                                        'Debe ingresar una modalidad valida',
                                    ]"
                                    required
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="hideDialogUpdateModalidad"
                            >
                              Cancelar
                            </v-btn>
                            <v-btn color="blue darken-1" :disabled="!valid2" text type="submit">
                              Guardar
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-icon small class="mr-2" @click="editModalidad(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteModalidad(item)"> mdi-delete </v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "../../axios";
export default {
  data() {
    return {
      dialogModalidadCreate: false,
      dialogUpdateCarrera: false,
      dialog: false,
      dialogUpdateModalidad: false,
      valid: true,
      valid2: true,
      headersCarrera: [
        {
          text: "id",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Nombre carrera",
          align: "start",
          sortable: false,
          value: "carreraNombre",
        },
        {
          text: "Correlativo",
          align: "start",
          sortable: false,
          value: "correlativo",
        },
        { text: "Actions", value: "actions", sortable: false },
      ],
      headersModalidad: [
        {
          text: "id",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Nombre de la modalidad",
          align: "start",
          sortable: false,
          value: "nombreModalidad",
        },

        { text: "Acciones", value: "action", sortable: false },
      ],
      editedIndex: -1,
      carreraData: {
        carreraNombre: "",
        correlativo: "",
      },
      modalidadData: {
        nombreModalidad: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      carreras: "getCarreras",
      modalidades: "getModalidades",
    }),
  },
  mounted() {
    this.GET_CARRERAS();
    this.GET_MODALIDADES();
  },
  methods: {
    //cargar carreras y modalidades
    ...mapActions(["GET_CARRERAS", "GET_MODALIDADES"]),
    //agregar carrera
    async addCarrera() {
      if (this.$refs.form.validate() === false) {
        this.$refs.form.validate();
      } else {
        try {
          const formData = new FormData();
          formData.append("carreraNombre", this.carreraData.carreraNombre);
          formData.append("correlativo", this.carreraData.correlativo);
          await axios.post("carreras", formData);

          this.GET_CARRERAS();
          this.hideDialogNewCarrera();

          this.carreraData = {
            carreraNombre: "",
            correlativo: "",
          };
          this.$swal({
            icon: "success",
            title: "Registro exitoso",
            text: "Usted ha registrado exitosamente",
          });
          this.$refs.form.resetValidation();
        } catch (error) {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: `${error.response.data.message}`,
          });
        }
      }
    },
    //actualizar carrera
    async updateCarrera() {
      try {
        await axios.put("carreras/" + this.carreraData.id, this.carreraData);
        this.$swal({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "Usted ha actualizado exitosamente",
        });
        this.GET_CARRERAS();
        this.hideDialogUpdateCarrera();
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    },
    //eliminar carrera
    async deleteCarrera(carrera) {
      try {
        Swal.fire({
          title: "Esta seguro?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "¡Sí, bórralo!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await axios.delete("carreras/" + carrera.id);
            this.GET_CARRERAS();
            Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");
          }
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    },
    //agregar modalidad
    async addModalidad() {
      if (this.$refs.form2.validate() === false) {
        this.$refs.form2.validate();
      } else {
        try {
          const formData = new FormData();
          formData.append("nombreModalidad", this.modalidadData.nombreModalidad);
          await axios.post("modalidades", formData);
          this.hideDialogNewModalidad();
          this.GET_MODALIDADES();
          this.$refs.form2.resetValidation();
          this.modalidadData = {
            nombreModalidad: "",
          };

          this.$swal({
            icon: "success",
            title: "Registro exitoso",
            text: "Usted ha registrado exitosamente",
          });
        } catch (error) {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: `${error.response.data.message}`,
          });
        }
      }
    },
    //actualizar modalidad
    async updateModalidad() {
      try {
        await axios.put("modalidades/" + this.modalidadData.id, this.modalidadData);
        this.$swal({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "Usted ha actualizado exitosamente",
        });
        this.GET_MODALIDADES();
        this.hideDialogUpdateModalidad();
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    },
    //eliminar modalidad
    async deleteModalidad(modalidad) {
      try {
        Swal.fire({
          title: "Esta seguro?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "¡Sí, bórralo!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await axios.delete("modalidades/" + modalidad.id);
            this.GET_MODALIDADES();
            Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");
          }
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    },
    // carrera
    editItem(item) {
      this.dialogUpdateCarrera = true;
      this.carreraData = { ...item };
    },
    hideDialogNewCarrera() {
      this.dialog = false;
      this.$refs.form.resetValidation();
    },
    hideDialogUpdateCarrera() {
      this.dialogUpdateCarrera = false;
    },
    //modalidades
    editModalidad(item) {
      this.dialogUpdateModalidad = true;
      this.modalidadData = { ...item };
    },
    hideDialogNewModalidad() {
      this.$refs.form2.resetValidation();
      this.dialogModalidadCreate = false;
    },
    hideDialogUpdateModalidad() {
      this.dialogUpdateModalidad = false;
    },
  },
};
</script>
