# Book Drive Test

## Overview
The **Book Drive Test** project is a web application designed to facilitate the booking and management of driving tests. The system supports three roles: **Driver**, **Examiner**, and **Admin**. It provides a smooth workflow for scheduling G2 and G driving tests, managing availability, and evaluating test results.

### Roles:
- **Driver**: Users who can book G2 and G tests.
- **Admin**: Responsible for providing test availability and assigning examiners to the test bookings.
- **Examiner**: Responsible for evaluating the Driver's driving skills and passing or failing them based on the test results.

## Features
- **Driver**:  
  - Book G2 and G driving tests.
  - View upcoming scheduled tests.
  
- **Admin**:  
  - Manage test availability.
  - Assign examiners to specific test bookings.
  
- **Examiner**:  
  - Review driving test results.
  - Pass or fail drivers based on their performance.

## Tech Stack

- **Backend**: Node.js, Express
- **Templating Engine**: EJS
- **Database**: MongoDB
- **Other Libraries**:
  - **bcrypt**: For password hashing.
  - **connect-flash**: For displaying flash messages.
  - **express-session**: For managing user sessions.
  - **mongoose**: For MongoDB database interactions.
  - **mongoose-unique-validator**: To enforce unique constraints in MongoDB.
  - **nodemon**: For automatic server restarts during development.
  - **pdfkit**: To generate PDF documents.
  - **puppeteer**: For browser automation and PDF generation.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GauravRanaOP/BookDriveTest.git
