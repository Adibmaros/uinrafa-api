import { fakultasProdi } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
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
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          status: "success",
          message: "Data fakultas dan program studi berhasil diambil",
          data,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Data fakultas dan program studi berhasil diambil",
        data: fakultasProdi,
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
