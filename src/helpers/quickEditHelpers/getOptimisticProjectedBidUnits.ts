import knack_obj_map from "src/controllers/knack_obj_map";
const { bid_units_per_projection_units_field } = knack_obj_map.masterBidItem.fields;

/**
 * Calculates an 'optimistic' PBU value using a Projection record ID and projection value. Displaying the optimistic value first provides a cleaner user experience.
 */
export default function getOptimisticProjectedBidUnits(projectionId: string, projectionValue: string) {
  if (!projectionValue || projectionValue === "0") return 0;
  const currentRecordRow = document.getElementById(projectionId);
  const bidUnitsPerProjectionUnitCell = currentRecordRow.getElementsByClassName(bid_units_per_projection_units_field)[0];
  const bidUnitsPerProjectionUnitValue = bidUnitsPerProjectionUnitCell.firstElementChild.firstElementChild.textContent;
  const optimisticProjectedBidUnits = parseInt(bidUnitsPerProjectionUnitValue) * parseInt(projectionValue);
  return optimisticProjectedBidUnits;
}
