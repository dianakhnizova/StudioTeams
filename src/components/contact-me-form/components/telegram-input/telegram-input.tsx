import { messages } from './messages';
import styles from '../../contact-me-form.module.css';
import { validationInput } from '../../validation-input';

interface Props {
  telegram: string;
  setTelegram: (value: string) => void;
  error: string;
  setError: (value: string) => void;
}

export const TelegramInput = ({
  telegram,
  setTelegram,
  error,
  setError,
}: Props) => {
  const handleTelegramChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setTelegram(inputValue);

    const error = validationInput(inputValue);
    setError(error);
  };

  return (
    <>
      <label htmlFor="name" className={styles.label}>
        {messages.labelTelegram}
      </label>
      <input
        id="telegram"
        type="text"
        value={telegram}
        onChange={handleTelegramChange}
        placeholder={messages.inputPlaceholderTelegram}
        className={!error ? styles.input : styles.errorInput}
      />
      {error && <p className={styles.errorContainer}>{error}</p>}
    </>
  );
};
