// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerCompileClass,
} from "unocss";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx-babel";
export default defineConfig({
  transformers: [transformerAttributifyJsx(), transformerCompileClass()],
  presets: [
    presetUno(),
    presetAttributify({
      
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
