"use strict";

const table = document.getElementById("tbodyRecent");
const allMeetings = JSON.parse(localStorage.getItem("meetingStorage"));

allMeetings.map((meeting) => {
  let tr = document.createElement("tr");

  tr.innerHTML = `
        <td>${meeting.name}</td>
        <td>${meeting.date}</td>
        <td>${meeting.link}</td>
    `;

  table.appendChild(tr);
});
