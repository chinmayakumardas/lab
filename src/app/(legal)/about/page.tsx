export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold">About</h1>

      <p className="mt-6 text-lg text-muted-foreground">
        Welcome to my developer lab.
      </p>

      <div className="mt-10 space-y-6">
        <p>
          Hi! I'm <strong>Your Name</strong>, a passionate full-stack developer
          who enjoys building modern web applications, exploring new
          technologies, and creating useful tools.
        </p>

        <p>
          This website is my personal lab where I experiment with ideas, build
          side projects, test frameworks, and share things I'm working on. It
          serves as a playground for learning and improving my development
          skills.
        </p>

        <p>
          Most of the projects here are built using technologies like Next.js,
          React, TypeScript, Tailwind CSS, Node.js, and modern web APIs.
        </p>

        <p>
          I'm always interested in learning, solving real-world problems, and
          building clean, performant, and user-friendly applications.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold">What you'll find here</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>🚀 Personal Projects</li>
          <li>🛠 Developer Tools</li>
          <li>🧪 Experiments & Prototypes</li>
          <li>💡 UI Components</li>
          <li>⚡ Web Development Ideas</li>
        </ul>
      </div>
    </section>
  );
}