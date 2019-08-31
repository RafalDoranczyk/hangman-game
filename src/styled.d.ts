import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      man: string;
      gallow: string;
    };
  }
}

const myTheme: DefaultTheme = {
  colors: { man: "#EADCCE", gallow: "#C47C35" }
};
export default myTheme;
