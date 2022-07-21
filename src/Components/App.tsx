import "../styles.css";
import React from "react";
import { ModalProvider } from "../Context/modalContext";
import Home from "../pages/home";
import { CustomerProvider } from "../Context/customerContext";

/*


Interview Task:

Create a WCAG 2.1 AA Compliant Modal

Put any content you want in the modal,
ensure it is dismissable or closable,
include comments to help us understand
your choices, the modal must prevent 
interaction with the underlying page
until dismissed or actioned

Write some tests to confirm that the
modal works and is compliant

Create some styles, remember any styles,
should also be WCAG 2.1 AA Compliant

NB: Getting the task done is more important than
it being complete, don't worry about impelementing 
the solution in a single file

Feel free to add libraries on the left,
the test runner is in a tab on the right

*/

export default function App() {
  return (
    <CustomerProvider>
      <ModalProvider>
        <header>
          <h1>Kevin's Nightmare</h1>
        </header>
        <main role="main">
          <Home />
        </main>
        <footer className="center">
          <p> Made by Kevin. </p>
        </footer>
      </ModalProvider>
    </CustomerProvider>
  );
}
