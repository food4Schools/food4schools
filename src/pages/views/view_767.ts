//? This is an example file showing how to mount a Vue app to a DOM element in Knack

import { createApp } from 'vue';
import myApp from '../../helpers/vueExampleApp/App.vue'; // update for your Vue app's main file

$(document).on('knack-view-render.view_767', function (event, view) {
  // append a <div> to a richtext view
  $('#view_767').append('<div id=myVueApp></div>'); // change this ID to something more appropriate

  const app = createApp({ ...myApp }); // create app instance

  app.mount('#myVueApp'); // mount the app to the DOM
});
