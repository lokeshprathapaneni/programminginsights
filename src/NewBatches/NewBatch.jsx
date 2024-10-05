import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const RegistrationLink = styled(Link)`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;


const BackButton = styled.button`
  background-color: #3b82f6; /* Blue */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb; /* Darker Blue */
  }
`;

export const NewBatches = () => {

    const batchDetails = [
        {
          courseName: "Core Java",
          duration: "2 Months",
          date: "15th Oct 2024",
          time: "6:30 AM-7:30 AM(1hr daily)",
          registrationLink: "/register"
        }
    
      ];
      

      const navigate = useNavigate(); // useNavigate hook to navigate to a route

      const openHomePage = () => {
        // Navigate to the route to load MyComponent
        navigate("/");
      };

    //   const registerStudentPage = () => {
    //     // Navigate to the route to load MyComponent
    //     navigate("/registerStudent");
    //   };
      
      
  return (
    <>
    <TableWrapper>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader>Course Name</TableHeader>
            <TableHeader>Registration</TableHeader>
            <TableHeader>Course Syllabus</TableHeader>
            <TableHeader>Batch Start Date</TableHeader>
            <TableHeader>Timings</TableHeader>
            <TableHeader>Registration</TableHeader>
            <TableHeader>Duration</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {batchDetails.map((batch, index) => (
            <TableRow key={index}>
              <TableData>{batch.courseName}</TableData>
              <TableData>
                <RegistrationLink to="/registerStudent">
                  Register
                </RegistrationLink>
              </TableData>
              <TableData>
                <RegistrationLink to="/syllabus">
                  Java Syllabus
                </RegistrationLink>
              </TableData>
              
              <TableData>{batch.date}</TableData>
              <TableData>{batch.time}</TableData>
              <TableData>{batch.duration}</TableData>
           
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      
    </TableWrapper>
    <BackButton onClick={openHomePage}>Back to Home</BackButton>
    </>
  );
};


