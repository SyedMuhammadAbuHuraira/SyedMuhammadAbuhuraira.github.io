'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Container = styled.div`
  padding: 40px;
  margin-left: 250px; /* Adjust based on your sidebar width */
  background-color: #f7f6f7;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  color: #2d3748;
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const BookingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  th, td {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  th {
    background-color: #4a90e2;
    color: white;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #e0e0e0;
  }

  td {
    font-size: 1.1em;
  }
`;

const NoBookingsMessage = styled.p`
  text-align: center;
  font-size: 1.5em;
  color: #888;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const AddBookingButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
`;

const ComplaintsSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ComplaintsTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8em;
  color: #2d3748;
  text-align: center;
`;

const ComplaintList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ComplaintItem = styled.li`
  padding: 10px;
  background-color: #f2f2f2;
  margin: 5px 0;
  border-radius: 4px;
`;

const GuestBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchBookings();
    fetchComplaints();
  }, []);

  const fetchBookings = async () => {
    // Replace this with your actual API call
    const dummyBookings = [
      { villaName: 'Sunset Villa', guestName: 'John Doe', arrivalDate: '2024-01-10', departureDate: '2024-01-15', guests: 0, nights: 0, amountPaid: 0, bookingSource: 'Website' },
      { villaName: 'Ocean Breeze', guestName: 'Jane Smith', arrivalDate: '2024-02-05', departureDate: '2024-02-10', guests: 0, nights: 0, amountPaid: 0, bookingSource: 'Travel Agent' },
    ];
    setBookings(dummyBookings);
  };

  const fetchComplaints = async () => {
    // Replace this with your actual API call
    const dummyComplaints = [
      { id: 1, message: 'Noise from neighboring villa.', date: '2024-01-11', guestName: 'John Doe' },
      { id: 2, message: 'Room not clean upon arrival.', date: '2024-02-06', guestName: 'Jane Smith' },
    ];
    setComplaints(dummyComplaints);
  };

  return (
    <Container>
      <Title>Guest Bookings</Title>
      {bookings.length > 0 ? (
        <BookingsTable>
          <thead>
            <tr>
              <th>Villa Name</th>
              <th>Guest Name</th>
              <th>Arrive</th>
              <th>Depart</th>
              <th>Guests</th>
              <th>Nights</th>
              <th>Revenue</th>
              <th>Booking Source</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.villaName}</td>
                <td>{booking.guestName}</td>
                <td>{booking.arrivalDate}</td>
                <td>{booking.departureDate}</td>
                <td>{booking.guests}</td>
                <td>{booking.nights}</td>
                <td>£{booking.amountPaid.toFixed(2)}</td>
                <td>{booking.bookingSource}</td>
              </tr>
            ))}
          </tbody>
        </BookingsTable>
      ) : (
        <NoBookingsMessage>No bookings available</NoBookingsMessage>
      )}
      <ButtonContainer>
        <AddBookingButton onClick={() => router.push('/add-booking')}>
          Add New Booking
        </AddBookingButton>
      </ButtonContainer>

      {/* Complaints Section */}
      <ComplaintsSection>
        <ComplaintsTitle>Guest Complaints</ComplaintsTitle>
        {complaints.length > 0 ? (
          <ComplaintList>
            {complaints.map(complaint => (
              <ComplaintItem key={complaint.id}>
                <strong>{complaint.guestName}</strong>: {complaint.message} <em>({complaint.date})</em>
              </ComplaintItem>
            ))}
          </ComplaintList>
        ) : (
          <NoBookingsMessage>No complaints recorded</NoBookingsMessage>
        )}
      </ComplaintsSection>
    </Container>
  );
};

export default GuestBookings;