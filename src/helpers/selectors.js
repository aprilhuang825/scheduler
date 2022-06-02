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

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer;

  for (const id in state.interviewers) {
    if (Number(id) === interviewerId) {
      return (
        {
          student: interview.student,
          interviewer: state.interviewers[id]
        }
      )
    }
  }
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.find(elem => elem.name === day);

  if (!filteredDays) {
    return [];
  }

  const interviewerId = filteredDays.interviewers;
  const interviewersForDay = [];

  for (const id in state.interviewers) {
    if (interviewerId.includes(Number(id))) {
      interviewersForDay.push(state.interviewers[id])
    }
  }
  return interviewersForDay;
}