"use strict";

const table = document.getElementById("tbodyRecent");
const allMeetings = JSON.parse(localStorage.getItem("meetingStorage"));

allMeetings.map((meeting) => {
  let tr = document.createElement("tr");

  tr.innerHTML = `
        <td class="table-name">${meeting.name}</td>
        <td class="table-date">${meeting.date}</td>
        <td class="table-link"><a href="${meeting.link}" target="_blank">Open</a></td>
    `;

  table.appendChild(tr);
});
