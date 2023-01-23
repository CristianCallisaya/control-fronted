<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app dark>
    <v-content style="background:#253139">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="5" md="5">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="12" sm="12" xs="12">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 text--black"
                        >Iniciar sesión</h1>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue"
                          />
                        </v-form>
                        <div class="text-center mt-3">
                        <v-btn rounded color="light-blue darken-4" dark>INGRESAR</v-btn>
                      </div>
                      <br>
                        <h3 class="text-center mt-4" @click="alert('test')">¿Olvido su contraseña?</h3>
                      </v-card-text>
                    
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    methods:{
        alert(){
            alert('test')
        }
    }
}
</script>
