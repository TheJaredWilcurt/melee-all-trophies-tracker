<template>
  <div>
    <h1 v-if="isJP">ボーナス データは進行中であり、変更されます</h1>
    <h1 v-else>Bonus data is in progress and will change</h1>

    <table id="bonus-list">
      <thead>
        <tr>
          <th><!-- link --></th>
          <th><!-- checkbox --></th>
          <th>Bonus Name</th>
          <th>Bonus Name (JP)</th>
          <th>Bonus Score</th>
          <th>Bonus Description</th>
          <th>Bonus Description (JP)</th>
          <th>Bonus Description (JP translated)</th>
          <th>Bonus Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><!-- link --></td>
          <td><!-- checkbox --></td>
          <td><input v-model="filterBonusName"></td>
          <td><input v-model="filterBonusNameJP"></td>
          <td><input v-model="filterScore"></td>
          <td><input v-model="filterDescription"></td>
          <td><input v-model="filterDescriptionJP"></td>
          <td><input v-model="filterDescriptionJPEN"></td>
          <td><input v-model="filterNotes"></td>
        </tr>
        <tr
          v-for="(bonus, bonusIndex) in filteredBonuses"
          :key="bonus.id"
          :class="{ acquired: bonusesAcquired[bonus.id] }"
          :id="'b' + bonus.id"
          @click.stop="bonusStore.toggleBonusAcquiredById(bonus.id)"
        >
          <td
            class="center"
            @click.stop
          >
            <a
              class="trophy-link compact"
              :href="'#b' + bonus.id"
              :title="'ID: ' + bonus.id"
            >
              <link-icon></link-icon>
            </a>
          </td>
          <td class="center"><input
            v-model="bonusesAcquired[bonus.id]"
            type="checkbox"
            class="trophy-checkbox compact"
          /></td>
          <td>{{ bonus.bonus || bonus.bonusEN }}</td>
          <td>{{ bonus.bonusJP }}</td>
          <td>{{ bonus.score }}</td>
          <td>{{ bonus.description }}</td>
          <td>{{ bonus.descriptionJP }}</td>
          <td>{{ bonus.descriptionJPEN }}</td>
          <td>{{ bonus.notes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BonusTable',
  components: {
    'link-icon': httpVueLoader('./components/link-icon.vue')
  },
  data: function () {
    return {
      filterBonusName: '',
      filterBonusNameJP: '',
      filterScore: '',
      filterDescription: '',
      filterDescriptionJP: '',
      filterDescriptionJPEN: '',
      filterNotes: ''
    };
  },
  methods: {
  },
  computed: {
    bonusStore: function () {
      return bonusStore();
    },
    filteredBonuses: function () {
      let bonuses = bonusStore().bonuses;
      bonuses = bonuses
        .filter((bonus) => {
          let name = (bonus.bonus || bonus.bonusEN).toLowerCase().includes(this.filterBonusName.toLowerCase());
          let nameJP = bonus.bonusJP.toLowerCase().includes(this.filterBonusNameJP.toLowerCase());
          let score = String(bonus.score).toLowerCase().includes(String(this.filterScore).toLowerCase());
          let description = bonus.description.toLowerCase().includes(this.filterDescription.toLowerCase());
          let descriptionJP = bonus.descriptionJP.toLowerCase().includes(this.filterDescriptionJP.toLowerCase());
          let descriptionJPEN = bonus.descriptionJPEN.toLowerCase().includes(this.filterDescriptionJPEN.toLowerCase());
          let notes = bonus.notes.toLowerCase().includes(this.filterNotes.toLowerCase());

          return (
            name &&
            nameJP &&
            score &&
            description &&
            descriptionJP &&
            descriptionJPEN &&
            notes
          );
        });
      return bonuses;
    },
    ...Pinia.mapState(bonusStore, [
      'bonuses',
      'bonusesAcquired'
    ]),
    ...Pinia.mapGetters(store, [
      'isJP'
    ])
  },
  created: function () {
    trophyStore().setTrophies(window.generateTrophyData());
    bonusStore().setBonuses(window.generateBonusData());
  }
};
</script>
