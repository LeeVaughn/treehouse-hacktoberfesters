"use strict";

// sorts student data alphabetically
const alphaList = data.sort((a, b) => {
   const userA = a.name.toLowerCase();
   const userB = b.name.toLowerCase();

   if(userA < userB) {
      return - 1;
   } else if (userA > userB) {
      return 1;
   } else {
      return 0;
   }
});

/**
 * Show page function - shows the selected page of students
 * @param {object} list - List of students to be paginated
 * @param {number} page - Page number to be shown
 */
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector(".student-list");

   // removes any previously displayed students
   studentList.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].gravatar_url}" alt="Profile Picture">
                  <h3>${list[i].name}</h3>
                  <span class="email">${list[i].profile_name}</span>
               </div>
               <div>
                  <span class="points">Points: ${list[i].points}</span>
               </div>
            </li>
         `;

         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}

/**
 Append page links function - Create and append pagination links for list
 @param {object} list - List of students to be paginated
*/
function addPagination(list) {
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector(".link-list");

   linkList.innerHTML = "";
   
   for (let i = 1; i <= numOfPages; i++) {
      const button = `<li><button type="button">${i}</button</li>`;

      linkList.insertAdjacentHTML("beforeend", button);
   }

   document.querySelector("button").className = "active";

   linkList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
         document.querySelector(".active").className = "";
         e.target.className = "active";

         showPage(list, e.target.textContent);
      }
   });
}

showPage(alphaList, 1);
addPagination(data);
