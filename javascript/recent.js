"use strict";

const table = document.getElementById("tbodyRecent");
const allMeetings = JSON.parse(localStorage.getItem("meetingStorage"));

const updateMeetings = (allMeetings) => {
  const orderMeetings = allMeetings.reverse();

  if (orderMeetings.length > 5) {
    orderMeetings.pop();
    localStorage.setItem("meetingStorage", JSON.stringify(orderMeetings));
    return orderMeetings;
  } else {
    return orderMeetings;
  }
};

if (allMeetings) {
  const orderMeetings = updateMeetings(allMeetings);

  orderMeetings.map((meeting) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
          <td class="table-name">${meeting.name}</td>
          <td class="table-date">${meeting.date}</td>
          <td class="table-link"><a href="${meeting.link}" target="_blank">Open</a></td>
      `;

    table.appendChild(tr);
  });
}
