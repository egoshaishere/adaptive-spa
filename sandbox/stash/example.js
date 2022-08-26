{/* <template>
  <v-dialog
    v-model="openDialog"
    persistent
    :width="options.width"
    :fullscreen="options.fullscreen && $vuetify.breakpoint.width < 960"
    class="popup"
  >
    <v-card class="popup__content">
      <v-card-title>
        <h3 class="popup__title">
          {{ options.title }}
        </h3>
        <Icon
          @click.native="openDialog = false"
          :name-icon="'mdi-close'"
          class="popup__icon"
        />
      </v-card-title>
      <v-card-text>
        <keep-alive v-if="options.component">
          <component :is="componentContent" :data.sync="options.data" />
        </keep-alive>
      </v-card-text>
      <v-card-actions>
        <Button
          v-for="(button, indexButton) in options.buttons"
          :key="button.text"
          :text="button.text"
          :disabled="button.optionsButton.disabled"
          @click.native="clickButton(indexButton)"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Icon from "../../../../base/components/Icon";
import Button from "../../../../base/components/Button";

// options: {
//   title: "", // заголовок popup
//   component: "", // компонент контента popup
//   data: null, // данные, передаваемые в popup или наоборот получаемые
//   buttons: [
//     {
//        text: "", // текст кнопки
//        click: false,  // состояние кнопки
//        showDialog: false, // закрывать ли окно после нажатия на эту кнопку
//        optionsButton: {disabled: true} // опции этой кнопки ( disabled, outline )
//      },
//   ],
//   width: 300,
//   fullscreen: true, // при мобильном фуллскрин если нужен
// },

export default {
  name: "Popup",
  props: ["dialog", "options"],
  components: {
    Icon,
    Button,
  },
  data: () => {
    return {
      openDialog: false,
    };
  },
  computed: {
    componentContent() {
      return () => import(`../ContentPopup/${this.options.component}.vue`);
    },
  },
  watch: {
    dialog() {
      this.openDialog = this.dialog;
    },
    openDialog() {
      if (this.openDialog) {
        this.options.buttons.forEach((button) => {
          button.click = false;
        });
      } else this.$emit("update:dialog", this.openDialog);
    },
  },
  methods: {
    clickButton(index) {
      this.options.buttons[index].click = true;
      if (!this.options.buttons[index].showDialog) this.openDialog = false;
    },
  },
};
</script>

<style lang="scss">
@import "../../../../base/assets/scss/main.scss";

div .popup {
  &__content {
    .v-card__title {
      padding: 20px 20px 0 !important;
      justify-content: center;

      @include for-size(phone-only) {
        padding: 30px 20px 0 !important;
      }

      .popup__icon {
        position: absolute;
        top: 20px;
        right: 20px;

        @include for-size(phone-only) {
          top: 10px;
          right: 10px;
        }
      }
    }

    .v-card__text {
      padding: 20px !important;
      justify-content: center;
    }

    .v-card__actions {
      padding: 0 20px 20px !important;
      justify-content: flex-end;
    }
  }

  &__title {
    @include headline($blue);
    word-break: break-word;
    text-align: center;
  }
}

.v-overlay__scrim {
  background-color: white !important;
}

div .v-dialog {
  box-shadow: $box-shadow;
}
</style>  */}
