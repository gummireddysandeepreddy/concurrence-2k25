import Image from 'next/image'
import Link from 'next/link'

export default function PastEvents() {
  const pastEvents = [
    { id: 1, title: 'Spring Concert 2023', date: '2023-04-15' },
    { id: 2, title: 'Graduation Ceremony', date: '2023-05-20' },
    { id: 3, title: 'Summer Research Symposium', date: '2023-07-10' },
    { id: 4, title: 'Alumni Homecoming', date: '2023-08-05' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Past Events</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Event Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
            <div key={img} className="relative h-48">
              <Image 
                src={`/placeholder.svg?height=200&width=300`} 
                alt={`Event image ${img}`} 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Event Highlights</h2>
        <div className="space-y-8">
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image 
                    src={`/placeholder.svg?height=200&width=300`} 
                    alt={event.title} 
                    width={300}
                    height={200}
                    className="h-48 w-full object-cover md:w-48"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{event.date}</div>
                  <Link href={`/past-events/${event.id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{event.title}</Link>
                  <p className="mt-2 text-gray-500">A brief recap of the event highlights and its impact on the college community.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}