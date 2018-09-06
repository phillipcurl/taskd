<template>
  <div class="pa3 ph4-l">
    <widget-base>
      <section>
        <header class="flex items-center justify-between bb b--black-10 ph3 pv2">
          <button class="no-underline input-reset pointer inline-flex dim items-center tc bg-white br2 b--black-10 pa2" 
                  type="button"
                  :disabled="$apollo.loading">
            <feather-icon icon="check" class="dib w1 h1 green" />
            <span class="f6 ml2 pr2">Mark Complete</span>
          </button>
          <div>
            <button class="no-underline input-reset pointer inline-flex items-center tc bg-white bn pa2 mr1" 
                    type="button"
                    data-balloon="Add a Subtask"
                    data-balloon-pos="down">
              <feather-icon icon="git-pull-request" class="dib w1 h1" />
            </button>
            <button @click="copyToClipboard"
                    class="no-underline input-reset pointer inline-flex items-center tc bg-white bn pa2 mr1" 
                    type="button"
                    data-balloon="Copy Task URL"
                    data-balloon-pos="down">
              <feather-icon icon="link" class="dib w1 h1" />
            </button>
            <dropdown icon="git-pull-request" class="mr1">

            </dropdown>
            <button class="no-underline input-reset pointer inline-flex items-center tc bg-white bn pa2" 
                    :disabled="!task"
                    type="button"
                    data-balloon="More actions"
                    data-balloon-pos="down">
              <feather-icon icon="more-horizontal" class="dib w1 h1" />
            </button>
          </div>
        </header>
        <div v-if="$apollo.loading" class="bg-white flex items-center justify-center pa4">
          <h1 class="f-headline">LOADING</h1>
        </div>
        <article v-if="!$apollo.loading" class="pa3">
          <div class="w-100 flex items-center mb3">
            <template v-if="!editing">
              <h1 class="f2 mv0 lh-title">{{ task.title }}</h1>
              <button @click="editing = true" 
                      class="input-reset pointer tc bn ml2 pa2"
                      type="button"
                      data-balloon="Edit title"
                      data-balloon-pos="down">
                <feather-icon icon="edit" class="dib w1 h1" />
              </button>
            </template>
            <template v-else>
              <input v-model="task.title" class="f2 mv0 ph2 lh-title w-100">
              <button @click="editing = false" class="input-reset pointer tc bn ml2 pa2" type="button">
                <feather-icon icon="save" class="dib w1 h1" />
              </button>
            </template>
            <!-- <feather-icon icon="edit" class="dib w1 h1 mr2" /> -->
            <!-- <h1 class="dib mv0 lh-title">{{task.title}}</h1> -->
          </div>
          <div class="flex items-center justify-between mb3">
            <div>
              <feather-icon icon="calendar" class="dib w1 h1" />
              Due:
              <flat-pickr
                      v-model="date"
                      :config="config"                                                          
                      class="f5 ph3 pv2 br2 input-reset ba b--near-white mv0" 
                      placeholder="Select date"               
                      name="date"
                      style="min-width: 275px;">
              </flat-pickr>
            </div>
            <div class="f7 gray">
              <div class="inline-flex items-start">
                <feather-icon icon="clock" class="dib w1 h1" />
                <div class="ml2">
                  <span :title="task.createdAt | localDateTime"
                        class="dib v-mid">
                    Created: {{ task.createdAt | localDateTime }}
                  </span>
                  <br>
                <span :title="task.updatedAt | localDateTime"
                      class="dib v-mid">
                  Last updated {{ task.updatedAt | timeAgo }} ago
                </span>
                </div>
                
              </div>
            </div>
          </div>
          <div v-if="!editorReady" class="flex items-center justify-center quill-editor">
            <h3>LOADING</h3>
          </div>
          <div v-show="editorReady" 
               class="quill-editor" 
               :content="task.description && task.description !== '' ? task.description : ''"
               @change="onEditorChange($event)"
               @blur="onEditorBlur($event)"
               @focus="onEditorFocus($event)"
               @ready="onEditorReady($event)"
               v-quill:myQuillEditor="editorOption">
          </div>
        </article>
      </section>
    </widget-base>
  </div>
</template>

<script>
import Task from '~/apollo/queries/task';
import flatPickr from 'vue-flatpickr-component';
import WidgetBase from '~/components/WidgetBase.vue';
import FeatherIcon from '~/components/Icons/FeatherIcon.vue';
import Dropdown from '~/components/Dropdown.vue';

export default {
  authenticated: true,
  layout: 'authenticated',
  apollo: {
    task: {
      query: Task,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id };
      }
    }
  },
  data() {
    return {
      date: Date.now(),
      editing: false,
      editorReady: false,
      content: '',
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            // [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            // [{ font: [] }],
            // [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        }
      },
      config: {
        enableTime: true,
        altInput: true,
        altFormat: 'F j, Y h:iK',
        dateFormat: 'Y-m-d h:iK'
      }
    };
  },
  methods: {
    onEditorBlur(editor) {
      console.log('editor blur!', editor);
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor);
    },
    onEditorReady(editor) {
      this.editorReady = true;
      console.log('editor ready!', editor);
    },
    onEditorChange({ editor, html, text }) {
      console.log('editor change!', editor, html, text);
      this.content = html;
    },
    copyToClipboard() {
      const el = document.createElement('textarea');
      const getUrl = window.location;
      const baseUrl =
        getUrl.protocol +
        '//' +
        getUrl.host +
        '/' +
        getUrl.pathname.split('/')[1];
      el.value = `${baseUrl}/${this.task.id}`;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.$toast.success('Copied to clipboard!', {
        duration: 2000
      });
    }
  },
  components: {
    WidgetBase,
    flatPickr,
    FeatherIcon,
    Dropdown
  }
};
</script>

<style lang="scss">
@import 'flatpickr/dist/flatpickr.css';
@import 'quill/dist/quill.snow.css';
@import 'quill/dist/quill.bubble.css';
@import 'quill/dist/quill.core.css';

.quill-editor {
  min-height: 200px;
  max-height: 500px;
  overflow-y: auto;
}

.flatpickr-input {
  min-width: 225px;
}
</style>
