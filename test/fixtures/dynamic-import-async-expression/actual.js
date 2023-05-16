(async () => {
  await import("./foo.json", { with: { type: "json" } });
})();
