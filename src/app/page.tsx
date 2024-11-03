import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to College Events</h1>
        <p className="text-xl text-gray-600 mb-6">Bringing the campus community together through exciting events.</p>
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            We strive to create memorable experiences that foster community, learning, and growth among our students, faculty, and staff.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((event) => (
            <div key={event} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={`/placeholder.svg?height=200&width=400`} alt={`Event ${event}`} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Event Title {event}</h3>
                <p className="text-gray-600 mb-4">Brief description of the event goes here.</p>
                <Link href={`/events/${event}`} className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/events" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View All Events
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Past Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((event) => (
            <div key={event} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Past Event {event}</h3>
              <p className="text-gray-700 mb-4">A brief recap of this past event and its highlights.</p>
              <Link href={`/past-events/${event}`} className="text-blue-600 hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}