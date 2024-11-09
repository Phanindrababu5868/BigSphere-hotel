# Booking Form Application

This is a React application for a hotel booking form. The form includes fields for user information, booking details, and the ability to calculate the room cost based on the number of rooms, adults, children, and stay duration. It includes form validation using Formik and Yup, state management using Zustand, and fake API calls with Axios.

### Features

- User Information Collection: Name, email, phone, number of adults and children.
- Booking Details: Check-in and check-out dates, number of rooms.
- Dynamic Cost Calculation: Total cost calculation based on input values.
- Form Validation: Ensures all fields are filled out correctly with real-time validation feedback.
- Fake API Integration: Simulates a booking API call to save form data.
- Responsive Design: Mobile-friendly UI built with Material-UI.


## Technologies

- **React**: UI library
- **Material-UI (MUI)**: Styling and layout
- **Zustand**: State management
- **Formik**: Form handling
- **Yup**: Schema validation
- **Axios**: HTTP client for API requests

## Setup Instructions


### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/personal-expense-tracker-api.git
   cd personal-expense-tracker-api
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```

3. Start the application
  ```bash
  npm run dev
  ```
4. Open your browser

Go to `http://localhost:5173` to view the app.

## Form Validation
The form validation schema is defined using Yup:

- **Name**: Required field.
- **Email**: Must be a valid email address.
- **Phone** : Must be a 10-digit number.
- **Adults** : Must be at least 1 adult.
- **Children**: Cannot be negative.
- **Check-in Date**: Required field.
- **Check-out Date**: Must be after the check-in date.

## API Integration
The application uses a fake API endpoint for demonstration purposes:

API Endpoint: https://jsonplaceholder.typicode.com/posts
Method: POST
Payload: Includes all form fields and room count.
This API call simulates a booking submission. Upon successful submission, a success message is displayed to the user.

## How to Use

 - **Fill in the form**: Enter your personal and booking details.
 - **Adjust Room Count**: Use the plus and minus buttons to adjust the number of rooms.
 - **Submit**: Click on the total price button to submit the booking.
 - **Confirmation**: If the booking is successful, a confirmation message will appear.


## Future Improvements
- Backend Integration: Connect to a real API for booking submissions.
- Enhanced Cost Calculation: Dynamically calculate costs based on room type, season, etc.
- User Authentication: Add login and sign-up functionality. 
