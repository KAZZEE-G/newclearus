export async function onRequestGet({ request }) {
  const headers = { "Cache-Control": "private, no-store", "Vary": "X-Newclearus-Location-Consent", "X-Content-Type-Options": "nosniff" };
  if (request.headers.get("X-Newclearus-Location-Consent") !== "yes")
    return Response.json({ error: "Location suggestion requires your choice." }, { status: 400, headers });
  const candidate = request.cf?.country || request.headers.get("cf-ipcountry") || "";
  const country = /^[A-Z]{2}$/.test(candidate) && !["XX", "T1"].includes(candidate) ? candidate : null;
  return Response.json({ country }, { headers });
}
