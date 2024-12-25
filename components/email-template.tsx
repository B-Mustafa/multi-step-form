interface EmailTemplateProps {
    carYear: string;
    carBrand: string;
    carModel: string;
    condition: string;
    vehicleStatus: string;
    mileage: string;
    zipCode: string;
    features: string[];
    otherFeatures: string;
    carTitle: string;
    hasKeys: string;
    fullName: string;
    email: string;
    phone: string;
    askingPrice: string;

  }
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    carYear,carBrand,carModel,condition,vehicleStatus,mileage,zipCode,features,otherFeatures,carTitle,hasKeys,fullName,email,phone,askingPrice
  }) => (
    <div>
      <p><strong>Car Information:</strong></p>
      <p>Year: {carYear}</p>
      <p>Brand: {carBrand}</p>
      <p>Model: {carModel}</p>

      <p><strong>Vehicle Condition:</strong></p>
      <p>Condition: {condition}</p>
      <p>Vehicle Status: {vehicleStatus}</p>
      <p>Mileage: {mileage}</p>
      <p>Zip Code: {zipCode}</p>
      <p>Features: {features.join(', ')}</p>
      {otherFeatures ? `<p>Other Features: {otherFeatures}</p>` : ''}
      <p>Car Title: {carTitle}</p>
      <p>Keys Available: {hasKeys}</p>

      <p><strong>Contact Information:</strong></p>
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Asking Price: ${askingPrice}</p>
    </div>
  );
  
  export default EmailTemplate;