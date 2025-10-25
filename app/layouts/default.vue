<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/" class="logo">Smile Photography</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </div>
      </nav>
    </header>
    
    <main class="main">
      <slot />
    </main>
    
    <footer class="footer">
      <p>&copy; 2024 Smile Photography. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 0;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #666;
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #333;
}

.main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

.footer {
  background: #f8f8f8;
  padding: 2rem;
  text-align: center;
  color: #666;
}
</style>