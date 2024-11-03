import Link from 'next/link'
import Image from 'next/image'

export default function Events() {
  const events = [
    { id: 1, title: 'Annual Science Fair', date: '2023-09-15', time: '10:00 AM', venue: 'Science Building' },
    { id: 2, title: 'Career Expo', date: '2023-10-01', time: '9:00 AM', venue: 'Student Center' },
    { id: 3, title: 'Music Festival', date: '2023-10-15', time: '6:00 PM', venue: 'Campus Amphitheater' },
    { id: 4, title: 'Entrepreneurship Workshop', date: '2023-11-05', time: '2:00 PM', venue: 'Business School' },
    { id: 5, title: 'International Food Fair', date: '2023-11-20', time: '11:00 AM', venue: 'Main Quad' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={`/placeholder.svg?height=200&width=400`} alt={event.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">
                <span className="block">Date: {event.date}</span>
                <span  className="block">Time: {event.time}</span>
                <span className="block">Venue: {event.venue}</span>
              </p>
              <Link href={`/events/${event.id}`} className="text-blue-600 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}