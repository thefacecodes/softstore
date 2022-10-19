<template>
  <footer>
    <div class="footer">
      <ul>
        <h5>Company</h5>
        <li><a href="#">About us</a></li>
        <li><a href="#">Store Location</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
      <ul>
        <h5>Follow us</h5>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
      <ul>
        <h5>Quick Links</h5>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>
    <div class="submenu">
      <p>&copy; 2022, All rights reserved</p>
      <p>Powered by Ezekiel 'The Face'</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
footer {
  padding-block: 15px 10px;
  background: #000000;
}

h5 {
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 20px;
}

.footer {
  border-block: 2px solid white;
  padding-block: 30px;
  /* margin-block: 20px; */
}

.footer,
.submenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 100px;
}

a {
  text-decoration: none;
  color: white;
}

.submenu {
  padding-block: 10px;
}

.footer ul li {
  list-style: none;
  margin-block: 10px;
}

@media (max-width: 480px) {
  .footer,
  .submenu {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 30px;
  }
}
</style>
