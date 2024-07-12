import addEventListenersToCells, { selectorString } from "@helpers/quickEditHelpers/addEventListeners";

/**
 *  - 123
 */
$(document).on("knack-view-render.view_170", function (event, view, data) {
  //* add event listener to all the Projection cells
  addEventListenersToCells(selectorString);
});
