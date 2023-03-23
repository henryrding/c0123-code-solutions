select "cus"."firstName",
       "cus"."lastName"
  from "customers" as "cus"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
 where "films"."title" = 'Magic Mallrats';
