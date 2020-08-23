import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Preview2 } from "../components/Preview2";

afterEach(() => {
    cleanup()
  }) // Default on import: runs it after each test.

describe(" Preview2 Tests ", () => {
  //let component;

  jest.mock("../previewImage", () => {
    return {
        convertFileToImage(){
            return 1;
        }
    };
  });

  beforeAll(() => {
    //   const { container, getByTestId } = render(<Preview2 />);
    //   component = ;
    //  console.log(component)
  });

  test("Must have an image", () => {
    const { container, getByTestId } = render(<Preview2 />);
    // const image = container.querySelector("img");
    //expect(image).toBeTruthy();
    expect(getByTestId("imageFile")).toBeTruthy();
  });

  test(" Must have an input file ", () => {
    const { container, getByTestId } = render(<Preview2 />);
    //const input = component.container.querySelector("input");
    expect(getByTestId("inputFile")).toBeTruthy();
  });

  /*test.only(" Must distpatch a change event", async () => {
    // const container = document.createElement("div");
    const base = document.createElement("div");
    document.body.appendChild(base);
    const { getByTestId } = render(<Preview2 />, base);
    const input = getByTestId("inputFile");
    const image = getByTestId("imageFile");
    await act(async () => {
     fireEvent.change(input, {
        target: {
          files: [
            new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
          ],
        },
      });
      
    });
    // expect(image).toHaveAttribute("src", "chucknorris.png");
  });*/
});
