import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    device: {
      iPad: string;
    };
    colors: {
      man: string;
      gallow: string;
    };
  }
}

const myTheme: DefaultTheme = {
  device: { iPad: "767px" },
  colors: { man: "#EADCCE", gallow: "#C47C35" }
};
export default myTheme;
