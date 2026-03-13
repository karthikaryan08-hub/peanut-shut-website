export async function POST(request) {
  try {
    const body = await request.json();

    const formattedData = {
      name: body.fullName,
      email: body.email,
      phone: body.phone,
      enquiry: body.enquiry,
      message: body.message
    };

    const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formattedData)
    });

    const text = await response.text();

    return Response.json({ status: "success", data: text });

  } catch (error) {
    return Response.json({ status: "error", message: error.toString() });
  }
}