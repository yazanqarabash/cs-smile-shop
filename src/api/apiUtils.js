export async function handleResponse(response) {
  let data = null;
  let error = null;
  switch (response.status) {
    case 200: // ok
    case 201: // created
      data = await response.data;
      return data;
    case 404: // not found
    case 500: // server error
      // So, a server-side validation error occurred.
      // Server side validation returns a string error message, so parse as text instead of json.
      error = await response.text();
      throw new Error(error);
    default:
      throw new Error("Network response was not ok.");
  }
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}
