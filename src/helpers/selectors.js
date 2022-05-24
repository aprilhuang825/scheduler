export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.find(elem => elem.name === day);

  if (!filteredDays) {
    return [];
  }

  const appointmentId = filteredDays.appointments;
  const appointmentsForDay = [];

  for (const id in state.appointments) {
    if (appointmentId.includes(Number(id))) {
      appointmentsForDay.push(state.appointments[id])
    }
  }
  return appointmentsForDay;
}