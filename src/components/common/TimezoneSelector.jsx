const timezones = [
  { label: 'UTC', value: 'UTC' },
  { label: 'Greenwich Mean Time (GMT)', value: 'Europe/London' },
  { label: 'Pacific Standard Time (PST)', value: 'America/Los_Angeles' },
  { label: 'Eastern Standard Time (EST)', value: 'America/New_York' },
  { label: 'Central European Time (CET)', value: 'Europe/Berlin' },
  { label: 'India Standard Time (IST)', value: 'Asia/Kolkata' },
  { label: 'Australian Eastern Time (AET)', value: 'Australia/Sydney' },
  { label: 'Japan Standard Time (JST)', value: 'Asia/Tokyo' },
  // Add more timezones as needed
];

const TimezoneSelector = ({ selectedTimezone, setSelectedTimezone }) => {
  return (
    <>
      <select
        value={selectedTimezone}
        onChange={(e) => setSelectedTimezone(e.target.value)}
      >
        {timezones.map((timezone) => (
          <option key={timezone.value} value={timezone.value}>
            {timezone.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default TimezoneSelector;
