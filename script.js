const API_URL = "http://localhost:5000/api/properties";

// Load Properties
if (window.location.pathname.includes("properties.html")) {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("property-list");
      list.innerHTML = data.map(p => `
        <div class="card">
          <img src="${p.imageUrl}" />
          <h3>${p.title}</h3>
          <p>${p.location}</p>
          <p><strong>₹${p.price.toLocaleString()}</strong></p>
          <a class="btn" href="details.html?id=${p._id}">Details</a>
        </div>
      `).join("");
    });
}

// Load Details
if (window.location.pathname.includes("details.html")) {
  const id = new URLSearchParams(window.location.search).get("id");

  fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(p => {
      document.getElementById("property-details").innerHTML = `
        <img src="${p.imageUrl}" />
        <h2>${p.title}</h2>
        <p><strong>₹${p.price.toLocaleString()}</strong></p>
        <p>${p.location}</p>
        <p>${p.description}</p>
      `;
    });
}
