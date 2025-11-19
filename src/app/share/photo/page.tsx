// app/share/photo/page.tsx
import { baseURL } from "@/resources";
import { sharePhoto } from "@/resources/content";
import { Flex, Meta, Text, Button, Icon } from "@once-ui-system/core";

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
    <Flex maxWidth="l" direction="column" gap="xl">
      {/* Shared Memory Section */}
      <Flex direction="column">
        <Text id="dummy" variant="heading-strong-l">
          You have a shared memory!
        </Text>
      </Flex>

      {/* Download App Section */}
      <Flex direction="column" gap="16">
        <Flex direction="column" gap="16">
          <Text variant="heading-strong-m">Download TimeFlies</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Capture, share, and relive your memories with friends and family.
            Available on iOS with Android coming soon.
          </Text>
        </Flex>

        {/* Download Buttons */}
        <Flex gap="16" direction="column">
          {/* iOS Button */}
          <Button
            prefixIcon={"apple"}
            href="https://apps.apple.com/us/app/timeflies-make-memories/id6752573820"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="l"
          >
            Download on App Store
          </Button>

          {/* Android Button - Coming Soon */}
          <Button prefixIcon="android" disabled variant="secondary" size="l">
            Coming Soon on Play Store
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
