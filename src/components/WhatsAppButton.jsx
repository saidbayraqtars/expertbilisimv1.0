import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/905461914055"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp ile iletişime geçin"
      title="WhatsApp ile iletişime geçin"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
