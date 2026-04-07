import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser"; // Zmiana na nowszą bibliotekę

function ContactForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_10n7o4v",
        "template_ymbjw2c",
        templateParams,
        "eLjIVPFYKuPxipu0H" // Public Key
      )
      .then(() => {
        reset();
        navigate("/dziekuje");
      })
      .catch((error) => {
        console.error("Błąd wysyłania przez EmailJS:", error.text || error);
      });
  };

  return (
    <section className={styles.wrapper}>
      <h1>Kontakt</h1>
      <p className={styles.lead}>
        Masz pytania? Napisz do mnie — odpowiem tak szybko, jak to możliwe.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Imię</label>
          <input
            id="name"
            {...register("name", { required: "Podaj swoje imię" })}
            placeholder="Twoje imię"
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Podaj adres email",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Niepoprawny adres email",
              },
            })}
            placeholder="twoj@email.com"
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Wiadomość</label>
          <textarea
            id="message"
            rows="5"
            {...register("message", { required: "Wpisz treść wiadomości" })}
            placeholder="Twoja wiadomość..."
          />
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submit}>
          Wyślij
        </button>
      </form>
    </section>
  );
}

export default ContactForm;