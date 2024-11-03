import Image from 'next/image'
import Link from 'next/link'

export default function EventDetails({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the event details based on the ID
  const event = {
    id: params.id,
    title: 'Sample Event',
    date: '2023-09-15',
    time: '10:00 AM',
    venue: 'Sample Venue',
    description: 'This is a detailed description of the event. It would include all relevant information about what attendees can expect, the schedule, and any other important details.',
    organizer: 'Event Planning Committee',
    volunteers: 'Student Volunteers Association',
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/events" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Events</Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={`/placeholder.svg?height=400&width=800`} alt={event.title} width={800} height={400} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <div className="mb-6">
            <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
            <p className="text-gray-600"><strong>Venue:</strong> {event.venue}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Event Description</h2>
            <p className="text-gray-700">{event.description}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Organizer</h2>
            <p className="text-gray-700">{event.organizer}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Volunteers</h2>
            <p className="text-gray-700">{event.volunteers}</p>
          </div>
          <div className="mt-8">
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">Register for Event</a>
          </div>
        </div>
      </div>
    </div>
  )
}