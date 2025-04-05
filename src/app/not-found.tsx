import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-nbk-cream py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl mb-6 text-nbk-maroon">404</h1>
        <h2 className="text-3xl md:text-4xl mb-8 text-nbk-brown">Page Not Found</h2>
        <p className="text-gray-700 max-w-md mx-auto mb-12">
          We cannot find the page you are looking for. It might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="bg-nbk-maroon text-white px-6 py-3 rounded-md hover:bg-nbk-brown transition-colors"
        >
          Return to Home Page
        </Link>
      </div>
    </section>
  )
}
