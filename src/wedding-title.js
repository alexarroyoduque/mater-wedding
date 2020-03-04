
// Import LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

export class WeddingTitle extends LitElement {
  
  static get properties() {
    return {
      title: { type: String },
      subtitle: {type: String},
      extra: {type: String}
    };
  }

  // background: url("https://wallpaperaccess.com/full/1804743.jpg");
        // background-position-y: -8rem;

  static get styles() {
    return css`
      div {
        padding: 1rem;
        text-align: center;
        font-size: 2rem;
        line-height: 4rem;
        position: relative;
      }

      div::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: url("./src/images/welcome.jpg");
        filter: grayscale(100%);
        background-position-x: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
      }

      @media screen and (min-width: 700px) {
        div::before {
          background-position-y: -4rem; 
        }
      }

      h1 {
        font-weight: normal;
        font-size: 3.4rem;
        margin: 1rem 0;
      }

      .subtitle {
        padding-top: 12rem;
        font-size: 1.9rem;
        line-height: 2rem;
      }

      h1, .subtitle {
        color: white;
        opacity: .9;
        text-shadow: 0px 0px 4px #c5a600;     
      }

      .extra {
        font-size: 1.4rem;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h1>${this.title}</h1>
        <p class="subtitle">
          ${this.subtitle}
          <br>
          <span class="extra">${this.extra}</span>
        </p>
      </div>
    `;
  }
}
// Register the element with the browser
customElements.define('wedding-title', WeddingTitle);
