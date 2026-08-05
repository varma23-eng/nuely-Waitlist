console.log("app.js loaded");
export async function submitWaitlist(data) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }
  
  return result;
}