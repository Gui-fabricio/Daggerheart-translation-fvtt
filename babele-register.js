Hooks.once("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: 'Daggerheart-translation-fvtt',
      lang: 'pt-BR',
      dir: 'compendium'
    });
  }
});
