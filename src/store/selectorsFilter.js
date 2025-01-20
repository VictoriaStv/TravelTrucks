import { createSelector } from "@reduxjs/toolkit";
import { selectTrailers } from "../store/selectorsTrailer";

export const selectLocationFilter = (state) => state.location.query;
export const selectFormFilter = (state) => state.filters.form;
export const selectFeaturesFilter = (state) => state.filters.features;
export const selectFilters = (state) => state.filters;

export const selectFilteredTrailers = createSelector(
  [
    selectTrailers,
    selectLocationFilter,
    selectFormFilter,
    selectFeaturesFilter,
  ],
  (trailers, locationFilter, formFilter, featuresFilter) => {
    return trailers.filter((trailer) => {
      const matchesLocation = trailer.location
        .toLowerCase()
        .includes(locationFilter.toLowerCase());
      const matchesForm = formFilter ? trailer.form === formFilter : true;
      const matchesFeatures = featuresFilter.every((feature) => {
        if (feature === "automatic") {
          return trailer["transmission"] === "automatic";
        }
        return trailer[feature] === true;
      });
      return matchesLocation && matchesForm && matchesFeatures;
    });
  }
);
