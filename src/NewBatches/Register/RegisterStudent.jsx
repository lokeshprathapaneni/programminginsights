import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
`;

const StyledForm = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  outline: none;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: #3f51b5;
  }
`;

const SubmitButton = styled.button`
width: 50%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #3f51b5;
  border: none;
  margin: 1%;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #2c387e;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  display: block;
  margin-top: 5px;
`;

const SuccessMessage = styled.div`
  color: green;
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 1.6;
`;

const BackButton = styled.button`
 width: 50%;
  padding: 12px;
  font-size: 16px;
  color: #333;
  background-color: #f0f0f0;
  border: none;
  margin: 1%;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #2c387e;
  }
`;

export const RegisterStudent = () => {
  // State management for form fields
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update state dynamically
    });
  };

  // Validate phone number (example)
  const isPhoneNumberValid = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);


  const navigate=useNavigate();

  const openBatchDetailsPage = () => {
    navigate("/newBatch");
};
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.phoneNumber) {
      setError("All fields are required");
      setSuccess(false);
    } else if (!isPhoneNumberValid(formData.phoneNumber)) {
      setError("Phone number must be 10 digits.");
      setSuccess(false);
    } else {
      setError("");
      console.log("Form submitted:", formData); // You can replace this with API call

      setSuccess(true);

      // Reset form fields after submission
      setFormData({
        name: "",
        phoneNumber: "",
      });

      alert(`Thanks for registering ${formData.name}, we will get back to you, you may also reach out to us on 9550213806`);
      navigate("/");

    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
      
        <FormTitle>Contact Form</FormTitle>

        <Description>
          The best way to register is to give us a missed call or drop a WhatsApp message to 9550213806 
          and we will call you back or you can fill out the form below.
        </Description>

        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            pattern="[0-9]{10}"
            title="Phone number must be 10 digits long."
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </FormField>

        <SubmitButton type="submit">Submit</SubmitButton>
        <BackButton onClick={openBatchDetailsPage}>Back</BackButton>
        

        {success && <SuccessMessage>Form submitted successfully!</SuccessMessage>}
        
      </StyledForm>
      
    </FormContainer>
  );
};


