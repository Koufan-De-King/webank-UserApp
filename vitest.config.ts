import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html","lcov"],
      all: true,
    },
    setupFiles: ["./vitest.setup.ts"],
  },
});
