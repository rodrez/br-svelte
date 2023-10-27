import type { ProjectType } from "$lib/types"
import NextOMS from "$assets/images/projects/next-oms.png"
import DSA from "$assets/images/projects/dsa.png"
import Mythus from "$assets/images/projects/mythus.png"

import ReactIcon from "$components/icons/React.svelte"
import JavascriptIcon from "$components/icons/Javascript.svelte"
import PythonIcon from "$components/icons/Python.svelte"
import DjangoIcon from "$components/icons/Django.svelte"
import TypescriptIcon from "$components/icons/Typescript.svelte"
import NextJSIcon from "$components/icons/NextJs.svelte"
import TailwindIcon from "$components/icons/Tailwind.svelte"

const SITE_TITLE = "Rodrez"

const SITE_DESCRIPTION =
  "Rodrez is a Software Engineer who specializes in building exceptional digital experiences."

const NAV_LINKS = [
  { href: "blog", title: "Blog" },
  // { href: '/DSA', title: 'DSA' },
  { href: "contact-me", title: "Contact" },
  { href: "resume", title: "Resume" },
]

const PROJECTS: ProjectType[] = [
  {
    id: crypto.randomUUID(),
    title: "Next OMS",
    description: `
        <div className="space-y-2">
          <p>
            OMS is a centralized web-based system that helps tracking progress and completion of
            training, audits and documentation. OMS also enables visibility when an employee needs
            to be retrained or re-qualified.
          </p>
          <p>
            Additional features includes but are not limited to reports, dashboards, data exports,
            employee history, time spent training/auditing and more.
          </p>
        </div>
      `,
    stack: "NextJS, Zustand, Django, DRF, Postgres, Tailwind, Cypress, Docker",
    image: NextOMS,
    url: "projects/next-oms",
  },
  {
    id: crypto.randomUUID(),
    title: "DSA",
    description: `
        <div className="space-y-2">
          <p>
            DSA is a blog that series focus on solving and explaining Data Structures and
            Algorithms. We go into depth on topics like Linked Lists, Trees, Graphs, Heaps, etc.
          </p>
          <p>We cover a variety of Blind 75 questions and LeetCode problems.</p>
        </div>
      `,
    stack: "NextJS, Zustand, Tailwind, Cypress, MDX",
    image: DSA,
    url: "tags/dsa",
  },
  {
    id: crypto.randomUUID(),
    title: "Mythus",
    description: `
        <div className="space-y-2">
          Mythus is a career assistant that helps you find the right job, or helps you build the
          skills you need to get the job.
        </div>
      `,
    stack: "Next, tRPC, Prisma, Postgres, Tailwind, NextAuth, Docker",
    image: Mythus,
    url: "https://mythus.io",
  },
]

const SKILLS = [
  {
    name: "React",
    icon: { name: ReactIcon, class: "fill-blue-500" },
    description:
      "4+ Years. Proficient in developing and maintaining robust user interfaces utilizing React's components and hooks. Extensive experience integrating React with technologies like Zustand and GraphQL, enhancing project scalability and performance.",
  },
  {
    name: "JavaScript",
    icon: { name: JavascriptIcon, class: "fill-yellow-500" },
    description:
      "Masterful in crafting both client-side and server-side logic using JavaScript. Accomplished in integrating with diverse APIs and databases to deliver seamless user experiences.",
  },
  {
    name: "Python",
    icon: {
      name: PythonIcon,
      class: "fill-blue-500",
    },
    description:
      "Skilled in creating standalone scripts and robust web applications using frameworks like Django. Proficient with handling large datasets and leveraging libraries like Pandas for sophisticated data analysis and manipulation.",
  },
  {
    name: "Django",
    icon: { name: DjangoIcon, class: "fill-green-700" },
    description:
      "3+ Years. Proficient in Django, including the Django Rest Framework (DRF) for developing REST APIs catering to web and mobile applications. Demonstrated ability in utilizing DRF's features to expedite project timelines and enhance application performance.",
  },
  {
    name: "TypeScript",
    icon: { name: TypescriptIcon, class: "fill-blue-500" },
    description:
      "Solid understanding of TypeScript's syntax and features like interfaces, classes, and type annotations that enhance code type safety and readability. Experience leveraging TypeScript alongside Prisma and gRPC to build efficient server-side applications.",
  },
  {
    name: "NextJS",
    icon: { name: NextJSIcon, class: "stroke-black" },
    description:
      "Experienced with Next.js for building server-rendered or statically-exported React applications. Demonstrated ability in leveraging core features like automatic code splitting, optimized performance, and server-side rendering to deliver high-performing applications.",
  },
  {
    name: "Tailwind",
    icon: { name: TailwindIcon, class: "fill-cyan-400" },
    description:
      "Experienced with Tailwind CSS for utility-first CSS structuring. Proficient in utilizing utility classes and creating custom design systems to build visually appealing and performant user interfaces.",
  },
]

export { PROJECTS, SITE_TITLE, SITE_DESCRIPTION, NAV_LINKS, SKILLS }
