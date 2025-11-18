import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ahmet",
  lastName: "Cengiz",
  name: `Ahmet Cengiz`,
  role: "App Developer",
  avatar: "/images/avatar.png",
  email: "myhtrastudios@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates about app development and tech</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Website",
    icon: "globe",
    link: "https://myhtra.co",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `TimeFlies App`,
  description: `Turn forgotten moments into future surprises`,
  headline: <>Transform memories with the element of time</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">TimeFlies</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Mobile App
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      TimeFlies transforms how you experience your memories by adding the
      element of time and anticipation.
      <br /> Capture photos today, rediscover them as surprises in the future.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About TimeFlies`,
  description: `Learn about TimeFlies - The memory rediscovery app`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "About TimeFlies",
    description: (
      <>
        TimeFlies transforms how you experience your memories by adding the
        element of time and anticipation. When you capture a photo, our app
        automatically assigns a future release date, keeping your image until
        that special moment arrives.
        <br />
        <br />
        Watch as your forgotten moments resurface months or years later,
        bringing back the emotions and context you might have otherwise lost.
        Whether it's a spontaneous sunset, a coffee with friends, or a quiet
        moment of reflection, TimeFlies helps you rediscover the magic in
        ordinary days.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Key Features",
    skills: [
      {
        title: "Smart Photo Capture",
        description: (
          <>
            Photo capture with intelligent release date assignment that creates
            anticipation for future rediscovery.
          </>
        ),
        tags: [
          {
            name: "Camera",
            icon: "camera",
          },
        ],
        images: [],
      },
      {
        title: "Memory Countdown",
        description: (
          <>
            Countdown timers showing when photos will be revealed, building
            excitement for forgotten moments.
          </>
        ),
        tags: [
          {
            name: "Time",
            icon: "clock",
          },
        ],
        images: [],
      },
      {
        title: "Secure Cloud Storage",
        description: (
          <>
            Your memories are safely stored with privacy controls and location
            tagging for context.
          </>
        ),
        tags: [
          {
            name: "Security",
            icon: "shield",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Updates & News",
  description: `Latest updates about TimeFlies app development`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "App",
  title: `TimeFlies Mobile App`,
  description: `Experience the joy of rediscovering your own life through delayed gratification`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `App Screenshots`,
  description: `Screenshots and previews of the TimeFlies app interface`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "TimeFlies app screenshot",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "TimeFlies app screenshot",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "TimeFlies app screenshot",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "TimeFlies app screenshot",
      orientation: "vertical",
    },
  ],
};

const sharePhoto = {
  path: "/share/photo",
  label: "Shared Memory",
  title: "Shared Memory - TimeFlies",
  description: "Check out this memory shared with you on TimeFlies",
  image: "/images/avatar.png",
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  sharePhoto,
};
