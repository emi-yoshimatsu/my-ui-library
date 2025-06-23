import { defineConfig } from "vite"
import path from "path"

// ライブラリ名やエントリーポイントに合わせて調整してください
export default defineConfig({
  build: {
    lib: {
      // ライブラリのエントリーポイント
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyUILibrary",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"], // ESM + CommonJS 両対応
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {}, // グローバル変数名（外部依存のとき必要）
      },
    },
    outDir: "dist",
  },
})
