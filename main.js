
Vue.component('task-list', {
  template: `
  <div>
    <task v-for="task in tasks">{{ task.description }}</task>
  </div>`,

  data() {
    return {
      tasks: [
        { description: 'Go to the Pier', complete: true },
        { description: 'Go go go', complete: false },
        { description: 'Go jump off the roof', complete: true },
        { description: 'Go to Work', complete: false }
      ]
    }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});

Vue.component('message', {
  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    }
  },

  template: `
    <article class="card" v-show="isVisible">
      <div class="card-header">
        {{ title }}
        <button type="btn btn-primary" @click="toggleVisible">X</button>
      </div>

      <div class="card-body">
        {{ body }}
      </div>
    </article>
  `,

  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    }
  }
});


Vue.component('', {
  props: ['heading', 'body'],

  template: `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{ heading }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ body }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  `,



});


new Vue({
  el: '#root',

  data() {
    return {
      message2: 'Blah and blah',
      showModal: false
    }

  }
})