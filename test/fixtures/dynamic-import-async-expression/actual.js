(async () => {
  await import("./foo.json", { assert: { type: "json" } });
})();
