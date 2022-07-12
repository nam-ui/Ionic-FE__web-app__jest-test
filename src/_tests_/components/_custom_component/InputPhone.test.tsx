import { render } from "@testing-library/react";
import InputPhone from "../../../components/_custom_component/InputPhone/UI";

describe("InputPhone.tsx", () => {
  let value: any, choice: interface_option;
  beforeEach(() => {
    value = "";
    choice = {
      srcImageTitle: "https://cdn-icons-png.flaticon.com/512/206/206632.png",
      title: "vietnam",
      code: "mk",
      value: "84",
    };
  });

  it("render function", () => {
    // const { baseElement } = render(
    //   <InputPhone value={value} choice={choice} changeChoice={} />
    // );
    // expect(baseElement).toBeDefined();
  });
});
interface interface_option {
  title: string;
  value: string;
  srcImageTitle: string;
  code: string;
}
