"use strict";

const table = document.getElementById("tbodyRecent");
const allMeetings = JSON.parse(localStorage.getItem("meetingStorage"));

const removeLastMeeting = (allMeetings) => {
  if (allMeetings.length > 5) {
    allMeetings.pop();
    localStorage.setItem("meetingStorage", JSON.stringify(allMeetings));
    return allMeetings;
  } else {
    return allMeetings;
  }
};

if (allMeetings) {
  const updateMeetings = removeLastMeeting(allMeetings);

  updateMeetings.map((meeting) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
          <td class="table-name">${meeting.name}</td>
          <td class="table-date">${meeting.date}</td>
          <td class="table-link"><a href="${meeting.link}" target="_blank">Open</a></td>
      `;

    table.appendChild(tr);
  });
}
