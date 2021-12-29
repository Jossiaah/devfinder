var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search = document.getElementById("search").value;

  var originalname = search.split(" ").join("");

  //   alert(originalname);

  fetch("https://api.github.com/users/" + originalname)
    .then((result) => result.json())
    .then((user) => {
      console.log(user);

      document.getElementById(
        "card"
      ).innerHTML = `<div class="display-card" id="card">
      <div class="profile">
        <div class="avatar">
          <img src=${user.avatar_url} alt="">
        </div>
        <div class="bio">
          <h2 class="name">${user.name}</h2>
          <p class="handle">@${user.login}</p>
          <p class="join-date">${user.created_at}</p>
        </div>
      </div>
      <div class="discription">
        <p>${user.bio}</p>
      </div>
      <div class="bio-info-bar">
        <div class="repos">
          <p>Reops</p>
          <h4>${user.public_repos}</h4>
        </div>
        <div class="followers">
          <p>Followers</p>
          <h4>${user.followers}</h4>
        </div>
        <div class="following">
          <p>Following</p>
          <h4>${user.following}</h4>
        </div>
      </div>
      <div class="socials">
        <div class="location">
          <i class="uil uil-map-marker location-icon"></i>
          <p>${user.location}</p>
        </div>
        <div class="website">
          <i class="uil uil-link link-icon"></i>
          <a href="">${user.blog}</a>
        </div>
        <div class="twitter">
          <i class="uil uil-twitter twitter-icon"></i>
          <p>${user.twitter_username}</p>
        </div>
        <div class="company">
          <i class="uil uil-building company-icon"></i>
          <p>${user.company}</p>
        </div>
      </div>
    </div>`;
    });
});
