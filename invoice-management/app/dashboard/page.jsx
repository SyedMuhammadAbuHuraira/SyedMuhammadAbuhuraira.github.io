'use client';

import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components
const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: linear-gradient(180deg, #F7F6F7 0%, #E0DFD8 100%);
  color: #646B6A;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 20px;
  align-self: center;
`;

const SidebarTitle = styled.h2`
  font-family: 'Nord Book', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #2d3748;
  margin-bottom: 20px;
  text-align: center;
`;

const SidebarItem = styled.a`
  color: #646B6A;
  padding: 15px 20px;
  text-decoration: none;
  margin: 5px 0;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    background: #B1AF9B;
    color: white;
  }
`;

const DashboardContainer = styled.div`
  display: flex;
  margin-left: 250px; 
  padding: 20px;
  background-color: #F7F6F7; 
  min-height: 100vh;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%; 
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 20px; 
`;

const CardContainer = styled.div`
  background: ${(props) => props.bgColor || '#fff'};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  flex: 1; 
  min-width: 220px; 
  height: 150px; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  cursor: pointer; 

  &:hover {
    transform: scale(1.05); 
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 5px 0;
  color: #2d3748; 
  text-align: center; 
  font-family: 'Ivy Journal Light', sans-serif;
  font-weight: normal;
  text-transform: uppercase; 
  letter-spacing: 0.2em; 
`;

const CardValue = styled.p`
  font-size: 20px; 
  font-weight: bold;
  color: #4a5568; 
  text-align: center; 
  font-family: 'Ivy Journal Light', sans-serif;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h2`
  margin: 0 0 10px 0;
  color: #2d3748; 
  font-family: 'Nord Book', sans-serif;
  text-transform: uppercase; 
  letter-spacing: 0.3em; 
`;

const ModalContent = styled.p`
  color: #4a5568; 
  font-family: 'Ivy Journal Light', sans-serif;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #2d3748;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4a5568; 
  }
`;

const BookingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  animation: ${fadeIn} 0.5s; /* Fade-in animation */
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px; /* Increased padding for better spacing */
    text-align: center; /* Center text */
  }

  th {
    background-color: #f2f2f2; /* Light gray background for headers */
    color: #333; /* Darker text for contrast */
    font-weight: bold; /* Bold font for headers */
  }

  tr:nth-child(even) {
    background-color: #f9f9f9; /* Zebra striping for even rows */
  }

  tr:hover {
    background-color: #e0e0e0; /* Highlight row on hover */
  }
`;

// Main Dashboard Component
const Dashboard = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', value: '' });
  const [bookings, setBookings] = useState([
    { villaName: 'Sunset Villa', guestName: 'John Doe', arrivalDate: '2024-01-10', departureDate: '2024-01-15', guests: 0, nights: 0, amountPaid: 0, bookingSource: 'Website' },
    { villaName: 'Ocean Breeze', guestName: 'Jane Smith', arrivalDate: '2024-02-05', departureDate: '2024-02-10', guests: 0, nights: 0, amountPaid: 0, bookingSource: 'Travel Agent' },
    { villaName: 'Mountain Retreat', guestName: 'Alice Johnson', arrivalDate: '2024-03-01', departureDate: '2024-03-05', guests: 0, nights: 0, amountPaid: 0, bookingSource: 'Direct' },
  ]);
  
  const [financials, setFinancials] = useState({ totalRevenue: 0, totalCosts: 0, netTotal: 0 });

  useEffect(() => {
    // Dummy financial calculations based on dummy bookings data
    const totalRevenue = bookings.reduce((total, booking) => total + booking.amountPaid, 0);
    const totalCosts = 0; // Set costs to zero for now
    const netTotal = totalRevenue - totalCosts;

    setFinancials({ totalRevenue, totalCosts, netTotal });
  }, [bookings]);

  const handleCardClick = (title, value) => {
    setModalContent({ title, value });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SidebarContainer>
        <Logo src="/sojourn.png" alt="CareOptima Logo" />
        <SidebarTitle>Dashboard</SidebarTitle>
        <SidebarItem onClick={() => handleCardClick('Total Revenue', `£${financials.totalRevenue.toFixed(2)}`)}>Total Revenue</SidebarItem>
        <SidebarItem onClick={() => handleCardClick('Total Costs', `£${financials.totalCosts.toFixed(2)}`)}>Total Costs</SidebarItem>
        <SidebarItem onClick={() => handleCardClick('Net Total', `£${financials.netTotal.toFixed(2)}`)}>Net Total</SidebarItem>
        <SidebarItem onClick={() => {
          localStorage.removeItem('token');
          router.push('/login');
        }}>Logout</SidebarItem>
      </SidebarContainer>

      <DashboardContainer>
        <CardsContainer>
          <Row>
            <CardContainer bgColor="#B1AF9B" onClick={() => handleCardClick('Total Revenue', `£${financials.totalRevenue.toFixed(2)}`)}>
              <CardTitle>Total Revenue</CardTitle>
              <CardValue>£{financials.totalRevenue.toFixed(2)}</CardValue>
            </CardContainer>
            <CardContainer bgColor="#E0DFD8" onClick={() => handleCardClick('Total Costs', `£${financials.totalCosts.toFixed(2)}`)}>
              <CardTitle>Total Costs</CardTitle>
              <CardValue>£{financials.totalCosts.toFixed(2)}</CardValue>
            </CardContainer>
            <CardContainer bgColor="#B1AF9B" onClick={() => handleCardClick('Net Total', `£${financials.netTotal.toFixed(2)}`)}>
              <CardTitle>Net Total</CardTitle>
              <CardValue>£{financials.netTotal.toFixed(2)}</CardValue>
            </CardContainer>
          </Row>
          
          {/* Bookings Table */}
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
              {bookings.length > 0 ? (
                bookings.map((booking, index) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan="8">No bookings available</td>
                </tr>
              )}
            </tbody>
          </BookingsTable>
        </CardsContainer>
      </DashboardContainer>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>{modalContent.title}</ModalTitle>
            <ModalContent>{modalContent.value}</ModalContent>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
};

export default Dashboard;