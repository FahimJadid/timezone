const timezones = ['UTC', 'GMT', 'PST', 'EST'];

const TimezoneSelector = ({selectedTimezone, setSelectedTimezone}) => {
  return (
    <>
        <select
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
        >
            {
                timezones.map((timezone) => (
                    <option key={timezone} value={timezone}>
                        {timezone}
                    </option>
                ))
            }

        </select>
    </>
  )
}

export default TimezoneSelector