import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import { Tailwind } from '@react-email/tailwind';
  
  interface CarInquiryEmailProps {
    carYear: string;
    carBrand: string;
    carModel: string;
    condition: string;
    vehicleStatus: string;
    mileage: string;
    zipCode: string;
    featured: string[];
    otherFeatures?: string;
    carTitle: string;
    hasKeys: string;
    fullName: string;
    email: string;
    phone: string;
    askingPrice: string;
  }
  
  export default function CarInquiryEmail(props: CarInquiryEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>New Car Inquiry from {props.fullName}</Preview>
        <Tailwind>
          <Body className="bg-gray-100 py-12 px-6">
            <Container className="bg-white p-8 rounded-lg shadow-sm">
              <Heading className="text-2xl font-bold mb-4">New Car Inquiry</Heading>
              
              <Section className="mb-6">
                <Heading className="text-lg font-semibold mb-2">Car Information</Heading>
                <Text>Year: {props.carYear}</Text>
                <Text>Brand: {props.carBrand}</Text>
                <Text>Model: {props.carModel}</Text>
              </Section>
              
              <Hr className="my-6" />
              
              <Section className="mb-6">
                <Heading className="text-lg font-semibold mb-2">Vehicle Condition</Heading>
                <Text>Condition: {props.condition}</Text>
                <Text>Vehicle Status: {props.vehicleStatus}</Text>
                <Text>Mileage: {props.mileage}</Text>
                <Text>Zip Code: {props.zipCode}</Text>
                <Text>Features: {props.featured.join(', ')}</Text>
                {props.otherFeatures && <Text>Other Features: {props.otherFeatures}</Text>}
                <Text>Car Title: {props.carTitle}</Text>
                <Text>Keys Available: {props.hasKeys}</Text>
              </Section>
              
              <Hr className="my-6" />
              
              <Section>
                <Heading className="text-lg font-semibold mb-2">Contact Information</Heading>
                <Text>Full Name: {props.fullName}</Text>
                <Text>Email: {props.email}</Text>
                <Text>Phone: {props.phone}</Text>
                <Text>Asking Price: ${props.askingPrice}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }