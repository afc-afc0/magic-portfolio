// app/share/photo/page.tsx
import { Metadata } from "next";

type Props = {
  searchParams: Promise<{ token?: string }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const token = params.token;

  // Optionally fetch photo details based on token
  // const photoData = await fetchPhotoData(token)

  return {
    title: "Shared Memory - Timeflies",
    description: "Check out this memory shared with you on Timeflies",
    openGraph: {
      title: "Shared Memory - Timeflies",
      description: "Check out this photo shared with you",
      type: "article",
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

export default async function PhotoPage({ searchParams }: Props) {
  const params = await searchParams;
  return <div>{/* Your photo component */}</div>;
}
