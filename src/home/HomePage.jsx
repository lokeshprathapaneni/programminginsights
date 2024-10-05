// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Navbar Component
const NavbarContainer = styled.nav`
  background-color: #1e3a8a; /* Dark Blue */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &:hover .dropdown {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #f8fafc; /* Light Gray */
  min-width: 150px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownLink = styled.a`
  color: #1e3a8a;
  padding: 10px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #e2e8f0; /* Light Hover Color */
  }
`;

const NextBatchButton = styled.button`
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

const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

// const Header = styled.header`
//   background-color: #1e3a8a; /* Dark Blue */
//   padding: 20px;
//   text-align: center;
//   color: white;
// `;

const HeroSection = styled.section`
  background: url('https://source.unsplash.com/random/1600x900/?technology') no-repeat center center/cover;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
`;

const CoursesSection = styled.section`
  padding: 40px;
  text-align: center;
  background-color: #f8fafc; /* Light Gray */
`;

const Course = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const CourseTitle = styled.h2`
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  color: #555;
`;

const TestimonialsSection = styled.section`
  padding: 40px;
  text-align: center;
`;

const Testimonial = styled.blockquote`
  font-style: italic;
  margin: 20px;
  padding: 20px;
  border-left: 5px solid #1e3a8a;
  background-color: #f0f9ff; /* Light Blue */
`;

const Footer = styled.footer`
  background-color: #1e3a8a; /* Dark Blue */
  padding: 10px;
  text-align: center;
  color: white;
`;

const HomePage = () => {

    const navigate = useNavigate(); // useNavigate hook to navigate to a route

    const openNewBatch = () => {
      // Navigate to the route to load MyComponent
      navigate("/newBatch");
    };
  return (
    <Container>
      <NavbarContainer>
        <h2>Telugu Techies</h2>
        <NavbarLinks>
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="#all-courses">
            All Courses
            <Dropdown className="dropdown">
              <DropdownLink href="#java">Java Programming</DropdownLink>
              <DropdownLink href="#javascript">JavaScript & React</DropdownLink>
              <DropdownLink href="#data-structures">Data Structures</DropdownLink>
            </Dropdown>
          </NavbarLink>
          <NextBatchButton onClick={openNewBatch}>New Batch</NextBatchButton>
        </NavbarLinks>
      </NavbarContainer>
      <HeroSection>
        <HeroTitle>Unlock Your Potential</HeroTitle>
        <HeroSubtitle>Join our online courses today!</HeroSubtitle>
      </HeroSection>
      <CoursesSection id="all-courses">
        <h2>Our Courses</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Course id="java">
            <CourseTitle>Java Programming</CourseTitle>
            <CourseDescription>
              Learn the fundamentals of Java and build your first applications.
            </CourseDescription>
          </Course>
          <Course id="javascript">
            <CourseTitle>JavaScript & React</CourseTitle>
            <CourseDescription>
              Master JavaScript and build interactive user interfaces with React.
            </CourseDescription>
          </Course>
          <Course id="data-structures">
            <CourseTitle>Data Structures & Algorithms</CourseTitle>
            <CourseDescription>
              Understand data structures and algorithms to improve your coding skills.
            </CourseDescription>
          </Course>
        </div>
      </CoursesSection>
      {/* <TestimonialsSection>
        <h2>What Our Students Say</h2>
        <Testimonial>
          "Telugu Techies has transformed my understanding of programming. Highly recommend!"
        </Testimonial>
        <Testimonial>
          "The courses are well-structured and the support from instructors is excellent!"
        </Testimonial>
      </TestimonialsSection> */}
      <Footer>
        <p>&copy; 2024 Telugu Techies. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default HomePage;
