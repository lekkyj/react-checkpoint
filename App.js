// src/App.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "John"; // Change this to test behavior

function App() {
  return (
    <Container className="py-5 d-flex flex-column align-items-center">
      <Card style={{ width: '22rem' }} className="shadow">
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center">
        <h4>
          Hello, {firstName ? firstName : "there"}!
        </h4>
        {firstName && (
          <img
            src="https://i.pravatar.cc/100"
            alt="avatar"
            className="rounded-circle mt-2"
          />
        )}
      </div>
    </Container>
  );
}

export default App;
