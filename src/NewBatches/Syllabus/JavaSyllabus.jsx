import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Sample syllabus data
const syllabusData = [
  { week: 1, topic: 'Introduction to Java', date: 'October 15, 2024' },
  { week: 2, topic: 'Java Basics', date: 'October 22, 2024' },
  { week: 3, topic: 'Object-Oriented Programming', date: 'October 29, 2024' },
  { week: 4, topic: 'Exception Handling', date: 'November 5, 2024' },
  { week: 5, topic: 'Collections Framework', date: 'November 12, 2024' },
  { week: 6, topic: 'Java I/O', date: 'November 19, 2024' },
  { week: 7, topic: 'Multithreading', date: 'November 26, 2024' },
  { week: 8, topic: 'Java Networking', date: 'December 3, 2024' },
  { week: 9, topic: 'Java GUI Programming', date: 'December 10, 2024' },
  { week: 10, topic: 'Final Project', date: 'December 17, 2024' },
];

// Styled components
const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #3f51b5;
  color: white;
  padding: 12px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
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

const JavaSyllabus = () => {

    const navigate = useNavigate();

    const openBatchDetailsPage = () => {
            navigate("/newBatch");
      };
  return (
    <Container>
      <Title>Course Syllabus for Core Java</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Week</TableHeader>
            <TableHeader>Topic</TableHeader>
            <TableHeader>Date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {syllabusData.map((item) => (
            <TableRow key={item.week}>
              <TableCell>{item.week}</TableCell>
              <TableCell>{item.topic}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <BackButton onClick={openBatchDetailsPage}>Back</BackButton>
    </Container>
  );
};

export default JavaSyllabus;
