// this file holds references to the objects and fields in the Knack database
// these references are imported and used throughout custom code
// if an object or field number changes, it should only need to be updated here

export default {
  projection: {
    objectKey: "object_18",
    fields: {
      projection_24_25_field: "field_184",
      projected_bid_units_field: "field_406",
      date_modified_field: "field_408",
    },
  },
  masterBidItem: {
    objectKey: "object_17",
    fields: {
      bid_units_per_projection_units_field: "field_174",
    },
  },
};
