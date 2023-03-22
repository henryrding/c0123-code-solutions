export default async function handleError(response, message) {
  const errorObject = {};
  errorObject.error = message;
  return [response, errorObject];
}
