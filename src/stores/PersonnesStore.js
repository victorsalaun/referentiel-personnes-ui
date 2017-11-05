import { types, process } from "mobx-state-tree";

import Personne from "../models/Personne";

const PersonnesStore = types
  .model("PersonnesStore", {
    personnes: types.optional(types.array(Personne), []),
    edited: types.maybe(types.reference(Personne)),
    fetchingData: types.optional(types.boolean, false)
  })
  .views(self => ({
    get PersonnesCount() {
      return self.personnes.length;
    }
  }))
  .actions(self => ({
    fetchPersonnes: process(function* load() {
      self.personnes = [];
      const personnes = yield fetch(
        "https://meltingpoc.k8.wildwidewest.xyz/api-personnes-mock/personnes"
      ).then(data => data.json());
      self.personnes = personnes;
    }),

    markFecthingData(fetching) {
      self.fetchingData = fetching;
    },

    setEdited(personne) {
      self.edited = personne;
    },
    getPersonneById(id) {
      console.log(self.personnes);
      return self.personnes.filter(personne => personne.id === id);
    }
  }));

export default PersonnesStore;
