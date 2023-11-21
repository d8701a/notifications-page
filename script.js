"use strict"

const btnRead = document.querySelector(".btn_read");
const posts = document.querySelectorAll(".post");
const redDots = document.querySelectorAll(".unread-dot");
const notificationsNumber = document.querySelector("#notificationsNumber")

btnRead.addEventListener("click", markAsRead);

function markAsRead() {
    posts.forEach((post, index) => {
        if (post.classList.contains("unreadPost")) {
            post.classList.remove("unreadPost")
            redDots.forEach(dot => {
                dot.style.display = "none"
            });
            notificationsNumber.textContent = "0";
            btnRead.textContent = "Mark as unread";
        }
    else if (index < 3) {
        post.classList.add("unreadPost");
        redDots.forEach(dot => {
            dot.style.display = "inline-block";
        });
        notificationsNumber.textContent = "3";
        btnRead.textContent = "Mark as read";
          }
    }
    )
};

