import { useState } from 'react';
import { Button } from '../button/button';
import styles from './contact-me-form.module.css';
import { messages } from './messages';
import { sendToTelegram } from '../../api/telegram-bot/send-to-telegram';
import { NameInput } from './components/name-input/name-input';
import { TelegramInput } from './components/telegram-input/telegram-input';
import { ReasonSelect } from './components/reason-select/reason-select';

export const ContactMeForm = () => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [errorTelegram, setErrorTelegram] = useState('');
  const [reason, setReason] = useState('help');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendToTelegram(name, telegram, reason);

      setSubmitMessage(messages.sendOk);
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);

      setName('');
      setTelegram('');
      setReason('help');
      setErrorName('');
      setErrorTelegram('');
    } catch {
      setSubmitMessage(messages.sendError);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>{messages.contactMeTitle}</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <NameInput
          name={name}
          setName={setName}
          error={errorName}
          setError={setErrorName}
        />
        <TelegramInput
          telegram={telegram}
          setTelegram={setTelegram}
          error={errorTelegram}
          setError={setErrorTelegram}
        />
        <ReasonSelect reason={reason} setReason={setReason} />

        <Button
          disabled={!!errorName || !!errorTelegram || !name}
          type="submit"
          className={styles.sendButton}
        >
          {messages.sendButton}
        </Button>
        {submitMessage && (
          <p className={styles.errorContainer}>{submitMessage}</p>
        )}
      </form>
    </div>
  );
};
