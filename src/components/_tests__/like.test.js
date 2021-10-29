import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like/>,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {
  it("Defaults to default text", () => {
    const label = container.querySelector("p");
    expect(label.textContent).toBe("Likes: 0");
  });
  it("Like text changes when clicked increment", () => {
    const likes = container.querySelector("#increment");
    const text = container.querySelector("p");
    act(() => {
      likes.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(text.textContent).toBe("Likes: 1");
    
  });
  it("Like text changes when clicked", () => {
    const likes = container.querySelector("#decrement");
    const text = container.querySelector("p");
    act(() => {
      likes.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(text.textContent).toBe("Likes: -1");
    
  });
});
