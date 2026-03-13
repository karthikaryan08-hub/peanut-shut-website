export async function POST(request) {
  try {

    const body = await request.json();

    const response = await fetch(
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        redirect: "follow",
      }
    );

    // Google Apps Script sometimes returns text not JSON
    // So we read as text first then try to parse
    const text = await response.text();
    
    console.log("Google Script response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      // If not JSON, still treat as success
      // because data was received by Google
      result = { status: "success" };
    }

    return Response.json({ 
      status: "success",
      data: result 
    });

  } catch (error) {
    console.error("API Route error:", error);
    return Response.json(
      { status: "error", message: error.toString() },
      { status: 500 }
    );
  }
}