// app/share/photo/page.tsx
import { Metadata } from "next";

type Props = {
  searchParams: { token?: string };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const token = searchParams.token;

  // Optionally fetch photo details based on token
  // const photoData = await fetchPhotoData(token)

  return {
    title: "Shared Memory - Timeflies",
    description: "Check out this memory shared with you on Timeflies",
    openGraph: {
      title: "Shared Photo - Timeflies",
      description: "Check out this photo shared with you",
      images: [
        {
          url: "https://time-files.co/api/photo-preview?token=" + token,
          width: 1200,
          height: 630,
          alt: "Shared photo preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Shared Memory - Timeflies",
      description: "Check out this memory shared with you",
      images: ["https://time-files.co/api/photo-preview?token=" + token],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function PhotoPage({ searchParams }: Props) {
  return <div>{/* Your photo component */}</div>;
}
