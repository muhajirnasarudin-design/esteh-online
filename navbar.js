const role = localStorage.getItem("role");

let menu = "";

/* OWNER */

if(role === "owner"){

  menu = `

    <a href="home.html">Home</a>

    <a href="menu.html">Kelola Menu</a>

    <a href="pesanan.html">Pesanan Masuk</a>

    <a href="admin.html">Dashboard</a>

    <a href="checkout.html">Pembayaran</a>

    <a href="kontak.html">Kontak</a>

    <a href="#" onclick="logout()">
      Logout
    </a>

  `;

}

/* BUYER */

else if(role === "buyer"){

  menu = `

    <a href="home.html">Home</a>

    <a href="menu.html">Menu</a>

    <a href="promo.html">Promo</a>

    <a href="keranjang.html">Keranjang</a>

    <a href="pesanan.html">Pesanan Saya</a>

    <a href="kontak.html">Kontak</a>

    <a href="#" onclick="logout()">
      Logout
    </a>

  `;

}

/* GUEST */

else{

  menu = `

    <a href="home.html">Home</a>

    <a href="menu.html">Menu</a>

    <a href="promo.html">Promo</a>

    <a href="kontak.html">Kontak</a>

    <a href="index.html">
      Login
    </a>

  `;

}

document.getElementById("navbar").innerHTML = menu;

/* LOGOUT */

function logout(){

  auth.signOut()

  .then(() => {

    localStorage.removeItem("role");

    window.location.href = "index.html";

  });

}
