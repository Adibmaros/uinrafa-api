import { prodi } from "@/constants/prodi";
import { NextResponse } from "next/server";

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
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Data program studi berhasil diambil",
        data: prodi,
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
