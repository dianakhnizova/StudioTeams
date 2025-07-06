import { messages } from './messages';
import styles from '../../contact-me-form.module.css';

interface Props {
  reason: string;
  setReason: (value: string) => void;
}

export const ReasonSelect = ({ reason, setReason }: Props) => {
  const handleReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(event.target.value);
  };

  return (
    <>
      {' '}
      <label htmlFor="reason" className={styles.label}>
        {messages.labelReason}
      </label>
      <select
        id="reason"
        value={reason}
        onChange={handleReasonChange}
        className={styles.select}
      >
        <option value="" disabled hidden>
          {messages.labelSelectReason}{' '}
        </option>
        <option value="help">{messages.labelHelp}</option>
        <option value="suggest">{messages.labelInvite}</option>
      </select>
    </>
  );
};
