import knack_obj_map from "src/controllers/knack_obj_map";
import dayjs from "dayjs";
const { date_modified_field } = knack_obj_map.projection.fields;

/**
 *  Takes a projection record ID and displays the current date in the Date Modified field.
 */
export default function displayDateModified(projectionId: string) {
  //* select the Projected Big Units cell for the current Projection record
  const currentRecordRow = document.getElementById(projectionId);
  const dateModifiedCell = currentRecordRow.getElementsByClassName(date_modified_field)[0];

  //* display the Projected Big Units value of the updated record in the cell
  dateModifiedCell.firstElementChild.textContent = dayjs().format("MM/DD/YYYY");
}
