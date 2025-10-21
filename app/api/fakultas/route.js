import { fakultas } from "@/constants/fakultas";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        status: "success",
        message: "Data fakultas berhasil diambil",
        data: fakultas,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
