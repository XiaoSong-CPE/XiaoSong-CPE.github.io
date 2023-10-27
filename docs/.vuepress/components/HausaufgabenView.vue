<template>
  <div>
    <n-space vertical>
      <n-select
        v-model:value="selectedStructure"
        :options="structureOptions"
        placeholder="Highlight Structure"
        clearable
      />
      <n-tabs type="line" animated>
        <n-tab-pane name="e1" tab="1. Applying given-before-new">
          <n-divider>Abstract</n-divider>
          <n-p style="text-align: justify">
            <n-text :type="a1">
              Dative alternation between prepositional and double object datives
              has been a popular topic in second language (L2) acquisition, but
              only few studies deal with discourse constraints such as the
              given-before-new principle, or given-new (GN) ordering, which
              describes the tendency to place given information before new
              information.
            </n-text>
            <n-text :type="a2">
              The present study investigated Chinese English as a Foreign
              Language (EFL) learners at different proficiency levels on their
              ability to instantiate the GN order in English dative
              constructions to account for their difficulty regarding the
              discourse constraint that is expected to stem from structural
              differences between the two languages.
            </n-text>
            <n-text :type="a3">
              In this study, 140 Chinese EFL learners were divided into 4 groups
              according to their proficiency levels, with ten native speakers in
              the control group. In a written elicited production task, six
              dative verbs were presented both in the given-theme and the
              given-recipient conditions so that the alignment of two objects
              and the errors in their responses could be probed.
            </n-text>
            <n-text :type="a4">
              Results demonstrated that sensitivity to the GN principle tended
              to increase as the participants’ English proficiency increased.
              More specifically, the GN order is more frequently instantiated in
              prepositional datives so that learners with high proficiency
              behave similar to native speakers while even advanced learners
              have difficulty producing as much GN order in double object
              datives as native speakers. A combination of two factors
              concerning the type of dative constructions and information
              structures is suggested to account for the results. Additionally,
              it was observed that Chinese learners of English would rather drop
              the given argument than produce new-given (NG) order, which
              violates the GN principle, probably due to their first language
              (L1) allowing topic drop.
            </n-text>
          </n-p>
          <n-divider>Conclusion</n-divider>
          <n-p style="text-align: justify">
            <n-text :type="c2">
              This study <b>aimed to</b> investigate Chinese EFL learners
              acquiring sensitivity to information structure, that is, GN
              principle, in the English dative alternation through an elicited
              written production task. In both the given-theme and
              given-recipient conditions, the proportion of GN order responses
              increased as the EFL learners’ proficiency increased demonstrating
              that sensitivity to this discourse principle increases with
              developing proficiency.
            </n-text>
            <n-text :type="c3">
              Still, at all proficiency levels there were more GN order
              responses in the given-theme condition, which elicited PD
              constructions, than the given-recipient condition, which elicited
              DOD constructions.
            </n-text>
            <n-text :type="c4">
              This suggests that it is quite difficult for even advanced
              learners to properly apply the discourse principle in DOD
              constructions (under the given-recipient condition). Also, in the
              given-recipient condition, more PD constructions in NG order were
              observed than DOD constructions in GN order among low proficiency
              learners, which can be deemed as the learners’ general bias toward
              the PD construction regardless of information order.
            </n-text>
            <n-text :type="c6">
              Then, a combination of two factors, type of dative constructions
              (PD vs. DOD) and information structures (GN vs. NG order),
              exerting their influence from the early stages of L2 acquisition
              may be able to account for the relative ease of acquiring
              native-like pragmatic competence in the given-theme condition
              compared to the given-recipient condition. In addition, we
              suggested that prominence of a certain argument could be the
              underlying factor instantiated in response with GN ordering, given
              argument drop, and new recipient drop.
            </n-text>
            <n-text :type="c7">
              Obviously, <b>further research</b> is required for a clearer
              picture depicting the issue as there are limitations in this
              study. For instance, although a written survey format was used in
              this research so as to effectively include the lower proficiency
              participants, an oral task could be a better format since the full
              range of linguistic resources (such as intonation) that native and
              L2 speakers recruit to realize information structure can be
              observed and considered for analysis. Additionally, investigating
              EFL learners speaking an L1 (e.g., non-topic-drop language) with
              properties distinct from Mandarin regarding dative alternation can
              provide an opportunity to obtain deeper insight by comparing the
              results from different L1s. Still, we hope that findings of this
              study can provide a stepping stone for future research.
            </n-text>
          </n-p>
        </n-tab-pane>
        <n-tab-pane name="e2" tab="2. The Politics And Gendering">
          <n-divider>Abstract</n-divider>
          <n-p style="text-align: justify">
            <n-text :type="a2">
              This article explores the theme of disability and sexuality, in
              the novels of Raymond Williams.
            </n-text>
            <n-text :type="a4">
              In all of his novels, male characters are frequently crippled and
              emasculated, while the female characters are capable and
              cryptically powerful. The crippled figures not only serve as
              examples of the victims of the crippling divisiveness of
              capitalism, but also represent working-class people, whose voices
              are constantly silenced. These figures also epitomize their state,
              the colonized and disabled Wales, politically, economically and
              culturally subordinated to British power.
            </n-text>
            <n-text :type="a2">
              As a woman’s face afects her prospects of achieving attention,
              respect and power, the article also explores the facial
              disfigurement of female characters.
            </n-text>
            <n-text :type="a4">
              Williams chooses to cripple many of his male characters, while
              bestowing on the female characters a quietly effective capacity
              for exerting strong influence over their husbands, brothers, etc.
              However, in this particular process of gendering power, Williams
              manages to over turn the traditional gender orthodoxies and
              patriarchal discourses. The gendering of disability and the
              disabling of gender is highly intertwined and mutually
              reinforcing. Consciously and unconsciously, he ofers the reader
              the possibilities of a regendered social and political
              configuration, primarily in Wales and by implication beyond.
            </n-text>
          </n-p>
          <n-divider>Conclusion</n-divider>
          <n-p style="text-align: justify">
            <n-text :type="c3">
              As can be seen in Williams’s fiction, male characters are disabled
              by leg impairment caused by external circumstances such as war
              (Bert), work injury (Ivor Ral and Idris), or accident (Mirin,
              Buxton and Dal Mered); while the females’ disabilities tend to be
              attributed to facial disfgurement resulting from internal causes
              or mysterious reasons. This illustrates how specifc examples of
              Williams’s character portraits echo the social perception that,
              “to be a disabled man is to fail to measure up to the general
              culture’s defnition of masculinity as strength; to be a disabled
              woman is to fail to measure up to the defnition of femininity as
              pretty passivity” (Mitchell and Sharon 1997, p. 92). A disabled
              man is asexualized to the same extent as a disfgured woman; for
              that matter, the gendering of disability and the disabling of
              gender is highly intertwined and mutually reinforcing.
            </n-text>
          </n-p>
          <n-p style="text-align: justify">
            <n-text :type="c1">
              In history, the Welsh women have not only been active participants
              in constructing the Welsh national identity and true democracy,
              but also ideological symbols in asserting greater independence
              from the dominion of the political masters in London, as well as a
              genuine spirit of social democracy. In political, judicial and
              economic afairs, Wales has been subjected to England’s
              sovereignty, and various endeavors to achieve independent
              nationhood proved futile. Writing well before devolution and a
              Welsh assembly, Williams never saw the likelihood of Wales being
              totally free from British power politically. At the same time,
              however, he denounced the arrogant sovereignty of London and of
              the British government trampling on the rights of ordinary local
              people, who, as he saw it, should have self-determination in
              developing their own environment and community. Williams is a
              reformist rather than a revolutionary, and thus, what he valued is
              Welsh working-class community culture, the kind of bonding that
              connects ordinary people with one another, so as to form a
              powerful feeling of class solidarity. If we see the masculine
              power of Welsh men as epitomizing the quasi-colonized state of
              Wales, then it can be legitimately argued that they are crippled
              by Britain; to connect this to the arguments above, all the tough
              strategies of resistance against the dominant power of England
              failed and the manhood of Wales had become lame, or even partly
              emasculated.
            </n-text>
            <n-text :type="c2">
              This explains recurrent image of crippled Welsh men in Williams’s
              fiction: for him, the resolute, masculine, revolutionary way of
              rising up against the British dominion and fighting for an
              idealized democratic society for the working-class people has
              become disabled by various inevitable factors. Rather, Williams’s
              fiction appears to suggest a soft power embodied in his strong
              female characters, a manipulative strategy to infuence the ruling
              class in England, that is, to assert Welsh culture as a
              completeness, a vigorous and solid existence, endowed with a
              forceful attraction, so as to influence England in a subtle and
              nonviolent way.
            </n-text>
          </n-p>
          <n-p style="text-align: justify">
            <n-text :type="c4">
              In sum, the gendering in Williams’s fiction carries rich symbolic
              connotations: the author chooses to cripple many of his male
              characters, while bestowing on the women a quietly efective
              capacity for exerting strong infuence over their husbands or
              brothers. In this process of gendering power, Williams overturns
              traditional gender orthodoxies and the established patriarchal
              discourses. Consciously and unconsciously, he ofers the reader the
              possibilities of a re-gendered social and political confguration,
              primarily in his Wales and by implication beyond. In this sense
              his fictional practice can be seen to connect implicitly, but
              compellingly, with his sociocultural theory.
            </n-text>
          </n-p>
        </n-tab-pane>
        <n-tab-pane name="e3" tab="3. Hongloumeng">
          <n-divider>Abstract</n-divider>
          <n-p style="text-align: justify">
            <n-text :type="a2">
              Based on a corpus-driven analysis of two translated versions of
              <i>Hongloumeng</i> (one by David Hawkes and the other by Xianyi
              Yang and Gladys Yang) in parallel corpora, this article
              investigates the use of lexical bundles in an attempt to trace the
              stylistic features and differences in the translations produced by
              the respective translators.
            </n-text>
            <n-text :type="a3">
              The <i>Hongloumeng</i> corpus is developed at the sentence level
              to facilitate co-occurrence of the source texts and the two
              corresponding translations. For this purpose, the three-word and
              four-word lexical bundles were first extracted and then analyzed
              with respect to the functional classification proposed by Biber et
              al. (2004).
            </n-text>
            <n-text :type="a4">
              The results of the study show that Hawkes’ translation is embedded
              with a greater number and variety of lexical bundles than the one
              by the Yang couple.
            </n-text>
            <n-text :type="a5">
              The study also identified the differences between the two versions
              which can be traced back to the deployment of different
              translation strategies of the translators, appearing in turn to be
              influenced by the language backgrounds of the translators, the
              translation skopos and settings, and the social, political, and
              ideological milieu in which the translations were produced.
            </n-text>
          </n-p>
          <n-divider>Conclusion</n-divider>
          <n-p style="text-align: justify">
            <n-text :type="c2">
              This study adopted a corpus-driven approach to investigate the use
              of lexical bundles in the two translations of the Chinese literary
              classic <i>Hongloumeng</i> as a feature of translator’s style.
            </n-text>
            <n-text :type="c3">
              The findings show that Hawkes exceeds Yangs in presenting a
              greater number and variety of bundles, thus giving rise to sharp
              stylistic differences between the two translations of
              <i>Hongloumeng</i>.
            </n-text>
            <n-text :type="c4">
              The stylistic differences as reflected in the use of bundles can
              be traced back to the translators’ language backgrounds, the
              translation skopos and the social, political and ideological
              milieu in which the translations were produced. Since lexical
              bundles are often seen as building blocks of language, bundle use
              in different translations of the same original text can provide a
              useful starting point for exploring the stylistic idiosyncrasies
              of different translators.
            </n-text>
            <n-text :type="c6">
              It should be noted, however, that the features identified in the
              current study are limited to this particular text rather than the
              translation/writing styles of Hawkes and Yangs in general. More
              research into other translations or even writings of the same
              translators can be carried out to confirm whether the stylistic
              features identified in this study are representative of the
              translators’s style.
            </n-text>
            <n-text :type="c5">
              Nonetheless, the current study has demonstrated that corpus-driven
              statistical and functional analysis of lexical bundles serves as a
              useful entry point for studying translator’s style, thus
              representing a different methodological route than the one
              available through traditional corpus methods which make use of
              parameters such as type-token ratio and sentence lengths.
              Methodologically speaking, corpus-driven analysis of lexical
              bundles provides an innovative way to study and identify the
              stylistic features of different translators.
            </n-text>
          </n-p>
        </n-tab-pane>
      </n-tabs>
    </n-space>
  </div>
</template>

<script setup lang="ts">
// import {
//   NP,
//   NText,
//   NSpace,
//   NSelect,
//   NForm,
//   NFormItem,
//   NCard,
//   NTabs,
//   NTabPane,
//   NH2,
//   NTag,
//   NCollapse,
//   NCollapseItem,
//   NDivider,
// } from "naive-ui";
import { ref, computed, type Ref } from "vue";
let selectedStructure: Ref<undefined | string> = ref(undefined);
function createComputed(value) {
  return computed(() =>
    selectedStructure.value === value ? `success` : `default`
  );
}

let c1 = createComputed(`c1`);
let c2 = createComputed(`c2`);
let c3 = createComputed(`c3`);
let c4 = createComputed(`c4`);
let c5 = createComputed(`c5`);
let c6 = createComputed(`c6`);
let c7 = createComputed(`c7`);
let a1 = createComputed(`a1`);
let a2 = createComputed(`a2`);
let a3 = createComputed(`a3`);
let a4 = createComputed(`a4`);
let a5 = createComputed(`a5`);
let structureOptions = [
  {
    key: "a",
    label: "Abstract",
    type: "group",
    children: [
      {
        value: `a1`,
        label: `Background`,
      },
      {
        value: `a2`,
        label: `Aims`,
      },
      {
        value: `a3`,
        label: `Methodology`,
      },
      {
        value: `a4`,
        label: `Key findings`,
      },
      {
        value: `a5`,
        label: `Contributions`,
      },
    ],
  },
  {
    key: "c",
    label: "Conclusion",
    type: "group",
    children: [
      {
        value: `c1`,
        label: `Background`,
      },
      {
        value: `c2`,
        label: `Aims and methodology`,
      },
      {
        value: `c3`,
        label: `Summary of key findings`,
      },
      {
        value: `c4`,
        label: `Evaluation of contribution - Theoretical implications`,
      },
      {
        value: `c5`,
        label: `Evaluation of contribution - Methodology implications`,
      },
      {
        value: `c6`,
        label: `Evaluation of contribution - Practical implications`,
      },
      {
        value: `c7`,
        label: `Recommendations for future research`,
      },
    ],
  },
];
</script>

<style scoped></style>
