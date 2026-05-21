import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { contactInformation } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';

const initialForm = {
  fullName: '',
  email: '',
  message: '',
};

const contactIcons = {
  Direccion: MapPin,
  Telefono: Phone,
  Correo: Mail,
};

function ContactSection({ onNotify }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const getStoredMessages = () => {
    try {
      return JSON.parse(window.localStorage.getItem('unifslb-contact-messages') ?? '[]');
    } catch {
      return [];
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Ingresa tu nombre.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Ingresa tu correo.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Ingresa un correo valido.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Escribe tu mensaje.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      onNotify({
        type: 'error',
        message: 'Revisa los campos marcados para continuar.',
      });
      return;
    }

    const currentMessages = getStoredMessages();
    const payload = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    window.localStorage.setItem(
      'unifslb-contact-messages',
      JSON.stringify([payload, ...currentMessages].slice(0, 20)),
    );

    setFormData(initialForm);
    onNotify({
      type: 'success',
      message: 'Mensaje guardado correctamente en el navegador.',
    });
  };

  return (
    <section id="contacto" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Canal directo"
          title="Contacto institucional"
          description="El formulario queda listo para integrarse a un backend real de correo o base de datos cuando se active la siguiente fase."
          light
        />

        <div className="contact-grid">
          <div className="contact-panel">
            <h3>Informacion de contacto</h3>
            <div className="contact-list">
              {contactInformation.map((item) => {
                const Icon = contactIcons[item.label];

                return (
                  <article key={item.label} className="contact-item">
                    <div className="contact-item-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Nombre completo
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
              />
              {errors.fullName ? <small>{errors.fullName}</small> : null}
            </label>

            <label>
              Correo electronico
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <small>{errors.email}</small> : null}
            </label>

            <label>
              Mensaje
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu consulta"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? <small>{errors.message}</small> : null}
            </label>

            <button type="submit" className="button">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
