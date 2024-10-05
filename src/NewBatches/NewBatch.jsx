import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TableHeader = styled.th`
  background-color: #f8f8f8;
  color: #333;
  padding: 12px 15px;
  border-bottom: 2px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
`;

const RegistrationLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const NewBatches = () => {

    const batchDetails = [
        {
          courseName: "Full-Stack Web Development",
          duration: "6 months",
          date: "15th Oct 2024",
          time: "10:00 AM - 12:00 PM",
          registrationLink: "/register"
        },
        {
          courseName: "Data Science with Python",
          duration: "4 months",
          date: "1st Nov 2024",
          time: "2:00 PM - 4:00 PM",
          registrationLink: "/register"
        },
        {
          courseName: "UI/UX Design Fundamentals",
          duration: "3 months",
          date: "20th Oct 2024",
          time: "11:00 AM - 1:00 PM",
          registrationLink: "/register"
        }
      ];
      
      
      
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader>Course Name</TableHeader>
            <TableHeader>Duration</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Registration</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {batchDetails.map((batch, index) => (
            <TableRow key={index}>
              <TableData>{batch.courseName}</TableData>
              <TableData>{batch.duration}</TableData>
              <TableData>{batch.date}</TableData>
              <TableData>{batch.time}</TableData>
              <TableData>
                <RegistrationLink href={batch.registrationLink} target="_blank">
                  Register
                </RegistrationLink>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};


