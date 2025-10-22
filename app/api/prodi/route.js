import { prodi } from "@/constants/prodi";
import { NextResponse } from "next/server";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const fakultas = searchParams.get("fakultas");

    if (fakultas) {
      const filteredProdi = prodi.filter((p) => p.fakultas.toLowerCase() === fakultas.toLowerCase());
      return NextResponse.json(
        {
          status: "success",
          message: "Data program studi berdasarkan fakultas berhasil diambil",
          data: filteredProdi,
        },
        { status: 200, headers: CORS_HEADERS }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Data program studi berhasil diambil",
        data: prodi,
      },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204, headers: CORS_HEADERS });
}
