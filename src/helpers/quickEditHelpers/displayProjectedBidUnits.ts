import knack_obj_map from "src/controllers/knack_obj_map";
const { projected_bid_units_field } = knack_obj_map.projection.fields;

/**
 *  Takes a projection record ID and PBU value and displays the value on the page.
 */
export default function displayProjectedBidUnits(projectionId: string, projectedBidUnits: string) {
  //* select the Projected Big Units cell for the current Projection record
  const currentRecordRow = document.getElementById(projectionId);
  const projectedBidUnitsCell = currentRecordRow.getElementsByClassName(projected_bid_units_field)[0];

  //* display the Projected Big Units value of the updated record in the cell
  projectedBidUnitsCell.firstElementChild.textContent = projectedBidUnits;
}
