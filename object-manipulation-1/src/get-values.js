/* exported getValues */
function getValues(object) {
  var values = [];
  for (var x in object) {
    values.push(object[x]);
  } return values;
}
