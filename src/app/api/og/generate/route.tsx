// app/api/og/route.tsx
import { ImageResponse } from "next/og";
import { baseURL } from "@/resources";

export const runtime = "nodejs";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Portfolio";

  async function loadGoogleFont(font: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(
      /src: url\((.+)\) format\('(opentype|truetype)'\)/
    );

    if (resource) {
      const response = await fetch(resource[1]);
      if (response.status == 200) {
        return await response.arrayBuffer();
      }
    }

    throw new Error("failed to load font data");
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "6rem",
          background: "#151515",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4rem",
            fontStyle: "normal",
            color: "white",
          }}
        >
          <span
            style={{
              padding: "1rem",
              fontSize: "6rem",
              lineHeight: "8rem",
              letterSpacing: "-0.05em",
              whiteSpace: "wrap",
              textWrap: "balance",
              overflow: "hidden",
            }}
          >
            {title}
          </span>
          {/* REMOVED: Person avatar and details section */}
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,
      fonts: [
        {
          name: "Geist",
          data: await loadGoogleFont("Geist:wght@400"),
          style: "normal",
        },
      ],
    }
  );
}
