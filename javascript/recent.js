"use strict";

const table = document.getElementById("tbodyRecent");
const allMeetings = JSON.parse(localStorage.getItem("meetingStorage"));

allMeetings.map((meeting) => {
  let tr = document.createElement("tr");

  tr.innerHTML = `
        <td>${meeting.name}</td>
        <td>${meeting.date}</td>
        <td><a href="${meeting.link}" target="_blank">Open</a></td>
    `;

  table.appendChild(tr);
});
