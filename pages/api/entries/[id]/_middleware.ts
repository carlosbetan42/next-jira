import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // if (req.page.name === "/api/entries") return NextResponse.next();

  const id = req.page.params?.id || "";

  const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  if (!checkMongoIDRegExp.test(id)) {
    return new Response(JSON.stringify({ message: "El id no es válido " + id }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return NextResponse.next();
}

// return new Response("Access Denied", {
//   status: 401,
//   headers: {
//     "x-token": "no existe",
//   },
// });
//
// return NextResponse.next();
