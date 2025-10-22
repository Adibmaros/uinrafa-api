import { fakultasProdi } from "@/constants/fakultasProdi";
import { NextResponse } from "next/server";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const kode = searchParams.get("kode");

    if (kode) {
      const data = fakultasProdi.find((f) => f.kode.toLowerCase() === kode.toLowerCase());

      if (!data) {
        return NextResponse.json(
          {
            status: "error",
            message: "Fakultas tidak ditemukan",
          },
          { status: 404, headers: CORS_HEADERS }
        );
      }

      return NextResponse.json(
        {
          status: "success",
          message: "Data fakultas dan program studi berhasil diambil",
          data,
        },
        { status: 200, headers: CORS_HEADERS }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Data fakultas dan program studi berhasil diambil",
        data: fakultasProdi,
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
