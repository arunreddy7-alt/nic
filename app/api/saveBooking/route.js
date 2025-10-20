import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const newBooking = await request.json();

    // Path to the bookings.json file
    const filePath = path.join(process.cwd(), 'app', 'bookings.json');

    // Read existing bookings
    let bookings = [];
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      bookings = JSON.parse(fileContents);
    }

    // Add new booking
    bookings.push(newBooking);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2));

    return new Response(JSON.stringify({ message: 'Booking saved successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error saving booking:', error);
    return new Response(JSON.stringify({ error: 'Failed to save booking' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
