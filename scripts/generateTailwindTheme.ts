import toTailwind from "@theme-ui/tailwind";
import { theme } from "../ui/theme";
import fs from "fs/promises";

const tailwindTheme = toTailwind(theme);
fs.writeFile("tailwind.config.json", JSON.stringify(tailwindTheme, null, 4));