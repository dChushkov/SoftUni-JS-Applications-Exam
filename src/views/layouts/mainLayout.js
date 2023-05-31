import { logout } from '../logout.js';
export const mainLayout = (ctx, cont) => ctx.html`
<div id="wrapper">
      <header>
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""/></a>

        <nav>
          <div>
            <a href="/catalog">Fruits</a>
            <a href="/search">Search</a>
          </div>

          
          ${ctx.userData !== null ? 
            ctx.html`
            <div class="user">
                <a href="/create">Add Fruit</a>
                <a @click=${() => logout(ctx)} href="javascript:void(0)">Logout</a>
          </div>
            `: 
            ctx.html`
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
          </div>
            `}
          
          
        </nav>
      </header>

    <main>
      ${cont}
    </main>
</div>
<footer>
      <p>@Fruitipedia</p>
</footer>
`;