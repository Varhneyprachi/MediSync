// import React from 'react';
// import { Container, Typography, Grid, Card, CardMedia, List, ListItem } from '@mui/material';
// import AboutImage from './AboutImg';

// const AboutUs = () => {
//   return (
//     <Container maxWidth="xl"   >
//       <AboutImage/>
//       <Typography variant="h4" component="h1" style={{ marginBottom: '1rem', marginTop: '2rem' ,}}>
//         About Us
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Welcome to our hospital management system! We are dedicated to providing
//         exceptional healthcare services to our patients and streamlining
//         administrative tasks for our staff.
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Our team of experienced doctors, nurses, and administrators work
//         tirelessly to ensure the smooth operation of the hospital and the
//         highest level of care for our patients.
//       </Typography>
//       <Typography variant="h5" component="h2" style={{ marginBottom: '1rem' }}>
//         Our Mission
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Our mission is to improve the health and well-being of our community by
//         providing accessible, high-quality medical services. We strive to
//         enhance patient outcomes, promote health education, and implement
//         innovative technology solutions to optimize healthcare delivery.
//       </Typography>
//       <Typography variant="h5" component="h2" style={{ marginBottom: '1rem' }}>
//         Our Values
//       </Typography>
//       <List>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Compassion: We treat every patient with empathy and understanding.</Typography>
//         </ListItem>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Excellence: We are committed to delivering the highest standard of care.</Typography>
//         </ListItem>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Integrity: We uphold ethical principles and maintain trust.</Typography>
//         </ListItem>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Collaboration: We foster teamwork and cooperation among our staff.</Typography>
//         </ListItem>
//         <ListItem style={{ marginBottom: '0.5rem' }}>
//           <Typography variant="body1">Innovation: We embrace new technologies and ideas to advance healthcare.</Typography>
//         </ListItem>
//       </List>
//       <Typography variant="h5" component="h2" style={{ marginBottom: '1rem' }}>
//         Contact Us
//       </Typography>
//       <Typography variant="body1" paragraph>
//         If you have any questions, suggestions, or would like to make an
//         appointment, please feel free to reach out to us. Our friendly staff
//         will be happy to assist you.
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Phone: +977-9862164447
//         <br />
//         Email:  bastolaronak12@gmail.com
//       </Typography>
//     </Container>
//   );
// };

// export default AboutUs;
import React from 'react';
import { Container, Typography, List, ListItem, styled } from '@mui/material';
import AboutImage from './AboutImg';

const SectionTypography = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const ListItemText = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const AboutUs = () => {
  return (
    <Container maxWidth="xl">
      <AboutImage />
      <SectionTypography variant="h4" component="h1">
        About Us
      </SectionTypography>

      <SectionTypography variant="body1" paragraph>
        Welcome to <strong>Narayana Healthcare</strong>, where we are committed to delivering
        world-class medical care while simplifying hospital operations through advanced technology.
      </SectionTypography>

      <SectionTypography variant="body1" paragraph>
        Our team of highly skilled doctors, nurses, and support staff work with dedication to ensure
        smooth hospital management and provide patients with the best possible care and attention.
      </SectionTypography>

      <SectionTypography variant="h5" component="h2">
        Our Mission
      </SectionTypography>

      <SectionTypography variant="body1" paragraph>
        Our mission is to enhance the health and well-being of our community by providing
        affordable, accessible, and high-quality healthcare services. We are focused on improving
        patient outcomes, promoting health awareness, and adopting innovative technologies to
        transform the way healthcare is delivered.
      </SectionTypography>

      <SectionTypography variant="h5" component="h2">
        Our Values
      </SectionTypography>

      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">
              Compassion: We treat every individual with kindness, empathy, and respect.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">
              Excellence: We strive to provide the highest quality medical care at every step.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">
              Integrity: We maintain transparency, honesty, and trust in all our practices.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">
              Collaboration: We believe in teamwork and a strong spirit of cooperation among our staff.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">
              Innovation: We embrace new ideas and technologies to continuously improve healthcare delivery.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      <SectionTypography variant="h5" component="h2">
        Contact Us
      </SectionTypography>

      <SectionTypography variant="body1" paragraph>
        Have a question, suggestion, or need an appointment? Feel free to reach out to us — our
        friendly team is always ready to help you.
      </SectionTypography>

      <SectionTypography variant="body1" paragraph>
        Location: New Delhi, India
        <br />
        Phone: +91-8445805005
        <br />
        Email: varshneyprachi26@gmail.com
      </SectionTypography>
    </Container>
  );
};

export default AboutUs;
