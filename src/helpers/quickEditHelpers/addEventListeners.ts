import knack_obj_map from "src/controllers/knack_obj_map";
import view_scene_map from "src/controllers/view_scene_map";
import { knack_api } from "knack-api/knack_api";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { ProjectionRecord } from "types";
import displayProjectedBidUnits from "./displayProjectedBidUnits";
import getOptimisticProjectedBidUnits from "./getOptimisticProjectedBidUnits";
import displayDateModified from "./displayDateModified";

const { projection_24_25_field, date_modified_field, projected_bid_units_field } = knack_obj_map.projection.fields;
const { scene_key, edit_projections_grid_view_key } = view_scene_map.api_page;

//* string to use for selecting the cells in the Projection column
export const selectorString = `td.${projection_24_25_field}`;

const keys = {
  ENTER: "Enter",
  ARROW_DOWN: "ArrowDown",
  ARROW_UP: "ArrowUp",
};

const regexFilterOutNonNumericValues = /[^0-9]/;
const regexFormatNumbersWithCommas = /(?<=\d)(?=(\d\d\d)+(?!\d))/g;

const updateProjectionRecord = async (recordId: string, newProjection: string) => {
  const payload = {
    [projection_24_25_field]: parseInt(newProjection.replace(/,/g, "")),
    [date_modified_field]: dayjs().format("MM/DD/YYYY"),
  };

  const params = {
    sceneKey: scene_key,
    viewKey: edit_projections_grid_view_key,
    recordId,
    payload,
  };

  const res = await knack_api.put(params);

  //* if there is an error, res will be undefined
  if (!res) {
    const masterBidItem = document.getElementById(recordId).firstElementChild.firstElementChild.firstElementChild.textContent;
    console.error("Error with PUT request");
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: `Could not update ${masterBidItem}`,
      showConfirmButton: false,
      timer: 5000,
    });
  }
  return res.record as ProjectionRecord;
};

const quickEditHandler = async (e: FocusEvent, originalValue: string, id: string) => {
  const inputEl = e.target as HTMLInputElement;
  const newValue = inputEl.value.trim();

  //* only update the record if the value of the input has been changed
  if (originalValue !== newValue) {
    //* Display the current date in Date Modified field
    displayDateModified(id);

    //* first, calculate & display the optimistic PBU value
    const optimisticProjectedBidUnits = getOptimisticProjectedBidUnits(id, newValue);
    displayProjectedBidUnits(id, optimisticProjectedBidUnits.toLocaleString());

    //* then, once the record is updated and returned, display the true PBU value from the updated projection
    const updatedProjection = await updateProjectionRecord(id, newValue);
    displayProjectedBidUnits(id, updatedProjection[projected_bid_units_field]);
  }
};

const preventNonNumericValues = (e: Event) => {
  const inputEl = e.target as HTMLInputElement;
  const inputValue = inputEl.value.replace(/,/g, "");
  const newValue = inputValue.replace(regexFilterOutNonNumericValues, "");
  const formattedValue = newValue.replace(regexFormatNumbersWithCommas, "$&,");
  inputEl.value = formattedValue;
};

const handleKeyDown = (e: KeyboardEvent, cell: HTMLInputElement) => {
  //* if the ENTER or ARROW_DOWN keys are pressed, focus on the next input
  if (e.code === keys.ENTER || e.code === keys.ARROW_DOWN) {
    const next = cell.parentElement.nextElementSibling?.querySelector(`td.${projection_24_25_field}`).firstElementChild as HTMLInputElement;
    if (next) next.focus();
  }

  //* if the ARROW_UP key is pressed, focus on the previous input
  if (e.code === keys.ARROW_UP) {
    const prev = cell.parentElement.previousElementSibling?.querySelector(`td.${projection_24_25_field}`).firstElementChild as HTMLInputElement;
    if (prev) prev.focus();
  }
};

const configureCell = (cell: HTMLInputElement) => {
  //* select the original <span> element in the table cell and get the record id
  const spanElement = cell.querySelector("span");
  const recordId = spanElement.parentElement.parentElement.id;

  //* get the original value of the table cell
  const orginalValue = spanElement.textContent.trim();

  //*c create a new input element to add to the table cell
  const newInput = document.createElement("input");
  newInput.className = "projection-input-element";

  //* autofill the original value
  newInput.value = orginalValue;

  //* add event listener for preventing non-numeric values from being inputted
  newInput.addEventListener("input", preventNonNumericValues);

  //* add event listener for handling when the input is "unfocussed"
  newInput.addEventListener("blur", (e) => quickEditHandler(e, orginalValue, recordId));

  //* add event listener for preventing non-numeric values from being inputted
  newInput.addEventListener("keydown", (e) => handleKeyDown(e, cell));

  //* remove the <span> from the cell and append the input so only the new input el is shown
  cell.removeChild(spanElement);
  cell.appendChild(newInput);
};

function addEventListenersToCells(querSelectorString: string) {
  try {
    const cells = document.querySelectorAll(querSelectorString);
    cells.forEach(configureCell);
  } catch (error) {
    console.error("Error configuring Projection cells: ", error);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: `Error transitioning to edit mode.`,
      showConfirmButton: false,
      timer: 5000,
    });
  }
}

export default addEventListenersToCells;
