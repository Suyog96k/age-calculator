import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
} from '@mui/material';
import dayjs from 'dayjs';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const handleDateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const calculateAge = () => {
    const today = dayjs();
    const birthDate = dayjs(birthdate);
    const years = today.diff(birthDate, 'year');
    const months = today.diff(birthDate, 'month') % 12;
    const days = today.diff(birthDate, 'day') % 30;
    setAge({ years, months, days });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'linear-gradient(45deg, #FF6F61, #4A90E2, #50E3C2)',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Container maxWidth="xs">
        {/* Underlined and Bold Age Calculator Text */}
        <Typography
          variant="h4"
          gutterBottom
          color="white"
          sx={{ textDecoration: 'underline', fontWeight: 'bold' }} // Underline and bold the text
        >
          Age Calculator
        </Typography>

        {/* Label Above the Input */}
        <Box mb={2}>
          <Typography variant="h6" color="white">
            Select Your Birthdate:
          </Typography>
        </Box>

        {/* Date Input Field with Reduced Width */}
        <TextField
          type="date"
          value={birthdate}
          onChange={handleDateChange}
          fullWidth
          margin="normal"
          sx={{
            backgroundColor: 'white', // White background for the input field
            '& .MuiInputBase-root': {
              height: 40, // Reduce height of input field
            },
            '& input': {
              fontSize: '14px', // Reduce font size of input
            },
            '& .MuiFormLabel-root': {
              fontSize: '14px', // Reduce font size of the label
            },
            width: '200px', // Reduced width of the date field
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          max={dayjs().format('YYYY-MM-DD')} // Prevent future dates
        />

        {/* Display the selected birthdate below the input */}
        {birthdate && (
          <Typography variant="h6" color="white" mt={2}>
            You were born on {dayjs(birthdate).format('MMMM D, YYYY')}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={calculateAge}
          sx={{ mt: 2 }}
        >
          Calculate Age
        </Button>

        {age && (
          <Typography
            variant="h6"
            mt={3}
            fontWeight="bold"
            color="white"
          >
            You are {age.years} years, {age.months} months, and{' '}
            {age.days} days old.
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default AgeCalculator;
