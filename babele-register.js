Hooks.on("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "daggerheart-pt-br",
      lang: "pt-BR",
      collections: [
        "daggerheart.adversaries",     // Adversários
		"daggerheart.ancestries",      // Ancestralidades
        "daggerheart.armors",     	   // Armaduras
        "daggerheart.bestforms",       // Forma de Fera
        "daggerheart.classes",         // Classes  
        "daggerheart.communities",     // Comunidades  
        "daggerheart.consumables",     // Consumíveis  
        "daggerheart.domains",         // Domínios  
        "daggerheart.environments",    // Experiências
        "daggerheart.journals",        // Journals
        "daggerheart.loot",            // Tesouros
        "daggerheart.subclasses",       // sub-classes
	    "daggerheart.weapons",         // Armas  
      ],
      override: false  // Mantenha false para não sobrescrever originais
    });
  }
});
