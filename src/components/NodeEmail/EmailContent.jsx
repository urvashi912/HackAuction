// EmailContent.jsx
import React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

const EmailContent = ({ url }) => (
  <Html>
    <Button href={url} type="submit">
      Send message
    </Button>
  </Html>
);

export default EmailContent;
