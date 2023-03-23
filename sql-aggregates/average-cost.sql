select avg("replacementCost") as "averageCost"
  from "films";

-- If you wanted an average cost rounded to the nearest cent.
-- select round(avg("replacementCost"), 2) as "averageCost"
--   from "films";
