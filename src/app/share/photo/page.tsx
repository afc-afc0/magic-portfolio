// app/share/photo/page.tsx
import { baseURL } from "@/resources";
import { sharePhoto } from "@/resources/content";
import { Flex, Meta, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: sharePhoto.title,
    description: sharePhoto.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(sharePhoto.title)}`,
    path: sharePhoto.path,
  });
}

export default function Photo() {
  return (
    <Flex maxWidth="l">
      <Text id="dummy" variant="heading-strong-l">
        You have a shared memory!
      </Text>
    </Flex>
  );
}
