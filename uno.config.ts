// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx-babel";
export default defineConfig({
  transformers: [transformerAttributifyJsx(), transformerCompileClass()],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
