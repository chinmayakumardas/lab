export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Contact</h1>

      <p className="mt-6 text-muted-foreground">
        Thanks for visiting my developer lab.
      </p>

      <div className="mt-10 space-y-4">
        <div>
          <h2 className="font-semibold">Email</h2>
          <p>hello@example.com</p>
        </div>

        <div>
          <h2 className="font-semibold">GitHub</h2>
          <p>https://github.com/yourusername</p>
        </div>

        <div>
          <h2 className="font-semibold">LinkedIn</h2>
          <p>https://linkedin.com/in/yourusername</p>
        </div>
      </div>
    </section>
  );
}