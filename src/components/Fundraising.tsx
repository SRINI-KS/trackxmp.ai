import './Fundraising.css';

export default function Fundraising() {
  return (
    <section className="fundraising">
      <div className="container">
        <h2 className="section-title">
          Building the Future of Project Management
        </h2>
        <p className="fundraising-text">
          We're on a mission to simplify project management with AI. Our team is
          currently building an MVP that will revolutionize how teams plan,
          track, and deliver projects. We're raising funds to accelerate
          development and bring Trackly AI to market faster. Join us on this
          journey to transform project management for modern teams.
        </p>
        <div className="fundraising-payment">
          <h3 className="fundraising-payment-title">Support Our Journey</h3>
          <p className="fundraising-payment-subtitle">
            Help us build the future of project management. Every contribution
            matters.
          </p>
          <div className="payment-box">
            <img src="/qr.jpg" alt="Razorpay QR Code" className="qr-code" />
            <p className="payment-instruction">
              Scan the QR code with any UPI app to contribute
            </p>
            <div className="payment-badges">
              <span className="badge">Google Pay</span>
              <span className="badge">PhonePe</span>
              <span className="badge">Paytm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
