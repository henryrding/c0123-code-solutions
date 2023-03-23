select "a"."line1",
       "ci"."name" as "city",
       "a"."district",
       "co"."name" as "country"
  from "addresses" as "a"
  join "cities" as "ci" using("cityId")
  join "countries" as "co" using("countryId");
