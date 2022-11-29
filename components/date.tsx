import { format } from 'date-fns';

export default function DateComponent({ dateString }) {
  return (
    <time className="italic" dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  );
}
