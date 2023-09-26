const main = async () => {
  await Bun.build({
    entrypoints: ["./src/main.ts"],
    outdir: "./out",
    target: 'bun'
  })
}

main()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.error(err)
  });
