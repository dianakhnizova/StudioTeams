import { messages } from './messages';
import styles from '../../contact-me-form.module.css';
import { validationInput } from '../../validation-input';

interface Props {
  name: string;
  setName: (value: string) => void;
  error: string;
  setError: (value: string) => void;
}

export const NameInput = ({ name, setName, error, setError }: Props) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setName(inputValue);

    const error = validationInput(inputValue);
    setError(error);
  };

  return (
    <>
      <label htmlFor="name" className={styles.label}>
        {messages.labelName}
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder={messages.inputPlaceholderName}
        className={!error ? styles.input : styles.errorInput}
      />
      {error && <p className={styles.errorContainer}>{error}</p>}
    </>
  );
};
