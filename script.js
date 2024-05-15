let body = document.querySelector('body');
let themeBtn = document.querySelector('#themeChangeBtn');
let themeName = document.querySelector('#themeName');
let moonIcon = document.querySelector('#moonIcon');

themeBtn.addEventListener('click', () =>) {
    body.classList.toggle('dark');

    if (themeName.textContent === 'DARK' || moonIcon.src === "./assets/moon.svg") {
        themeName.textContent = 'light';
        moonIcon.src = "./assets/sun.svg";
    } else {
        themeName.textContent = 'DARK';
        moonIcon.src = "./assets/moon.svg";
    }
};

const searchInput = document.getElementById(".searchArea");
const searchButton = document.getElementById(".searchBtn");

searchButton.addEventListener("click", () => {
    let userName = searchInput.value.split(" ").join("");
    let userNotFound = document.getElementById("userNotFound");
    fetch("https://api.github.com/users/" + userName).then((response) => {
        if (response.ok) {
            userNotFound.style.display = "none";
            return response.json();
        } else {
            userNotFound.style.display = "block";
            throw new Error("User not found");
        }
    })
    .then((data) => {
        let name = data.name;
        let userName = document.getElementById("userName");
        userName.textContent = name;
        let profileImg = data.avatar_url;
        document.getElementById("profileImg").src = profileImg;
        document.getElementById("profileImgMobile").src = profileImg;
        let joinFullDate = data.created_at;
        let dateStr = joinFullDate.substring(0, 10);
        let dateSplit = dateStr.split("-");
        const monthNumber = dateSplit[1] - 1;
        const monthName = new Date(Date.UTC(0, monthNumber)), toLocaleString('en-US', { month: 'short'});

        let joinDate = document.getElementById("joinDate");
        let joinMonth = document.getElementById("joinMonth");
        let joinYear = document.getElementById("joinYear");
        joinDate.textContent = dateSplit[2];
        joinMonth.textContent = monthName;
        joinYear.textContent = dateSplit[0];

        let userId = data.login;
        let userIdUrl = data.html_url;
        document.getElementById("userId").textContent = '@' = userId;
        document.getElementById("userId").href = userIdUrl;

        let bio = data.bio;
        let userBio = document.getElementById("userBio");
        userBio.textContent = bio;

        let publicRepos = data.public_repos;
        let following = data.following;
        let followers = data.followers;
        let UserRepo = document.getElementById("userRepo");
        UserRepo.textContent = publicRepos;
        let userFollowers = document.getElementById("userFollowers");
        userFollowers.textContent = followers;
        let userFollowing = document.getElementById("userFollowing");
        userFollowing.textContent = following;

        let location = data.location;
        let userLocation = document.getElementById("userLocation");

        if (location === null) {
            userLocation.textContent = "Not Available";
        } else {
            userLocation.textContent = location;
        }

        let twitterUsername = data.twitter_username;
        let userTwitterName = document.getElementById("userTwitterName");
        if (twitterUsername === null) {
            userTwitterName.textContent = "Not Available";
        } else {
            userTwitterName.textContent = twitterUsername;
            userTwitterName.href = "https://twitter.com/" + twitterUsername;
        }

        let company = data.company;
        let userCompany = document.getElementById("userCompany");
        if (company === null) {
            userCompany.textContent = "Not Available";
        } else {
            userCompany.textContent = company;
        }

        let blogUrl = data.blog;
        let userWebsite = document.getElementById("userWebsite");
        if (blogUrl === "") {
            userWebsite.textContent = "Not Available";
            userWebsite.href = "#";
        } else {
            let domain = blogUrl.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i)[1];
            userWebsite.textContent = domain;
        }
   })
});