export default async function Home() {
  const resp = await fetch("http://localhost:3000/api/create-link-token", {
    method: "POST", // Ensure it's a POST request
  });
  
  const data = await resp.json(); // Parse the JSON response
  console.log(data);

  return (
    <div>
      {/* Render your UI */}
    </div>
  );
}


