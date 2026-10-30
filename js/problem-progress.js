(() => {
  const KEY = "moldova-thermodynamics-solved-v1";
  const PROBLEMS = [{"id": "M2010-11-P2", "topic": "molecular-physics-kinetic-theory", "subtopic": "kinetic-theory-density-molecular-flow"}, {"id": "S2013-11-P4", "topic": "molecular-physics-kinetic-theory", "subtopic": "kinetic-theory-density-molecular-flow"}, {"id": "M2015-11-P1", "topic": "molecular-physics-kinetic-theory", "subtopic": "gas-mixtures-partial-pressures"}, {"id": "MAR-2011-XI-P2", "topic": "molecular-physics-kinetic-theory", "subtopic": "kinetic-theory-density-molecular-flow"}, {"id": "M2011-12-P4", "topic": "molecular-physics-kinetic-theory", "subtopic": "kinetic-theory-density-molecular-flow"}, {"id": "MAR-2015-XI-P3", "topic": "molecular-physics-kinetic-theory", "subtopic": "kinetic-theory-density-molecular-flow"}, {"id": "M2014-12-P2", "topic": "molecular-physics-kinetic-theory", "subtopic": "gas-mixtures-partial-pressures"}, {"id": "M2017-12-P2", "topic": "molecular-physics-kinetic-theory", "subtopic": "vapour-phase-equilibrium"}, {"id": "MAR-2020-XII-P2", "topic": "molecular-physics-kinetic-theory", "subtopic": "gas-mixtures-partial-pressures"}, {"id": "M2024-11-P3", "topic": "molecular-physics-kinetic-theory", "subtopic": "gas-mixtures-partial-pressures"}, {"id": "MAR-2026-XI-P2", "topic": "molecular-physics-kinetic-theory", "subtopic": "kinetic-theory-density-molecular-flow"}, {"id": "M2015-12-P2", "topic": "molecular-physics-kinetic-theory", "subtopic": "kinetic-theory-density-molecular-flow"}, {"id": "ORF-2024-XII-P3", "topic": "molecular-physics-kinetic-theory", "subtopic": "thermal-statistics-radiation"}, {"id": "ORF-2025-XII-P3", "topic": "molecular-physics-kinetic-theory", "subtopic": "thermal-statistics-radiation"}, {"id": "M2010-11-P4", "topic": "ideal-gas-processes", "subtopic": "gas-laws-pumping-compression"}, {"id": "S2022-11-P3", "topic": "ideal-gas-processes", "subtopic": "gas-laws-pumping-compression"}, {"id": "S2010-11-P4", "topic": "ideal-gas-processes", "subtopic": "gas-laws-pumping-compression"}, {"id": "S2010-12-P5", "topic": "ideal-gas-processes", "subtopic": "gas-laws-pumping-compression"}, {"id": "M2013-12-P1", "topic": "ideal-gas-processes", "subtopic": "gas-laws-pumping-compression"}, {"id": "MAR-2014-XI-P1", "topic": "ideal-gas-processes", "subtopic": "pv-paths-temperature-extrema"}, {"id": "S2014-11-P5", "topic": "ideal-gas-processes", "subtopic": "pv-paths-temperature-extrema"}, {"id": "S2014-12-P2", "topic": "ideal-gas-processes", "subtopic": "gas-laws-pumping-compression"}, {"id": "S2016-12-P3", "topic": "ideal-gas-processes", "subtopic": "gas-laws-pumping-compression"}, {"id": "MAR-2019-XI-P1", "topic": "ideal-gas-processes", "subtopic": "pv-paths-temperature-extrema"}, {"id": "S2022-11-P2", "topic": "ideal-gas-processes", "subtopic": "gas-laws-pumping-compression"}, {"id": "S2014-12-P3", "topic": "ideal-gas-processes", "subtopic": "adiabatic-combined-processes"}, {"id": "ORF-2025-XI-P1", "topic": "ideal-gas-processes", "subtopic": "adiabatic-combined-processes"}, {"id": "ORF-2018-XI-P1A", "topic": "first-law-of-thermodynamics", "subtopic": "work-heat-internal-energy"}, {"id": "S2023-11-P2", "topic": "first-law-of-thermodynamics", "subtopic": "work-heat-internal-energy"}, {"id": "S2015-12-P2", "topic": "first-law-of-thermodynamics", "subtopic": "work-heat-internal-energy"}, {"id": "S2017-12-P2", "topic": "first-law-of-thermodynamics", "subtopic": "heat-capacities-path-dependence"}, {"id": "M2018-11-P4", "topic": "first-law-of-thermodynamics", "subtopic": "work-heat-internal-energy"}, {"id": "MAR-2018-XII-P2", "topic": "first-law-of-thermodynamics", "subtopic": "work-heat-internal-energy"}, {"id": "S2019-11-P5", "topic": "first-law-of-thermodynamics", "subtopic": "work-heat-internal-energy"}, {"id": "MAR-2023-XI-P2", "topic": "first-law-of-thermodynamics", "subtopic": "heat-capacities-path-dependence"}, {"id": "M2013-11-P3", "topic": "first-law-of-thermodynamics", "subtopic": "work-heat-internal-energy"}, {"id": "MAR-2022-XI-P2", "topic": "first-law-of-thermodynamics", "subtopic": "heat-capacities-path-dependence"}, {"id": "ORF-2019-XII-P3B", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "M2012-11-P3", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "basic-thermodynamic-cycles"}, {"id": "M2015-11-P5", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "M2015-12-P5", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "basic-thermodynamic-cycles"}, {"id": "M2017-11-P2", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "S2017-11-P3", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "basic-thermodynamic-cycles"}, {"id": "M2019-11-P5", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "S2019-12-P2", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "M2020-11-P2", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "M2023-11-P2", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "M2011-12-P5", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "advanced-adiabatic-cycles"}, {"id": "S2013-11-P2", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "M2019-12-P3", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "basic-thermodynamic-cycles"}, {"id": "MAR-2022-XII-P2", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "advanced-adiabatic-cycles"}, {"id": "S2022-12-P2", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "efficiency-carnot-comparisons"}, {"id": "ORF-2023-XII-P1B", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "basic-thermodynamic-cycles"}, {"id": "ANCE-2026-XI-P3", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "advanced-adiabatic-cycles"}, {"id": "M2020-12-P3", "topic": "heat-engines-thermodynamic-cycles", "subtopic": "advanced-adiabatic-cycles"}, {"id": "S2010-10-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "M2010-11-P5", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "calorimetry-mechanical-heating"}, {"id": "S2010-11-P5", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "M2012-12-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "thermal-expansion-transfer-radiation"}, {"id": "M2013-11-P4", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "thermal-expansion-transfer-radiation"}, {"id": "M2015-11-P4", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "calorimetry-mechanical-heating"}, {"id": "S2016-10-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "S2017-10-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "calorimetry-mechanical-heating"}, {"id": "M2019-11-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "thermal-expansion-transfer-radiation"}, {"id": "S2019-11-P4", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "S2020-11-P1", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "S2022-11-P1", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "M2023-11-P1", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "calorimetry-mechanical-heating"}, {"id": "M2011-10-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "S2013-10-P1", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "M2013-11-P5", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "S2013-11-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "M2014-10-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "M2015-12-P4", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "S2016-11-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "M2016-12-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "M2016-12-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "calorimetry-mechanical-heating"}, {"id": "M2017-11-P5", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "thermal-expansion-transfer-radiation"}, {"id": "M2018-11-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "M2022-11-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "S2023-11-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "thermal-expansion-transfer-radiation"}, {"id": "S2024-10-P2e", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "calorimetry-mechanical-heating"}, {"id": "ORF-2019-X-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "S2020-11-P3", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "calorimetry-mechanical-heating"}, {"id": "ORF-2022-X-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "electrical-heating-thermal-power"}, {"id": "ORF-2023-X-P2", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "calorimetry-mechanical-heating"}, {"id": "ORF-2024-XI-EXP", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "thermal-expansion-transfer-radiation"}, {"id": "ORF-2017-XII-P2B", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "thermal-expansion-transfer-radiation"}, {"id": "ORF-2025-XII-P1", "topic": "calorimetry-phase-changes-thermal-phenomena", "subtopic": "phase-changes-latent-heat"}, {"id": "ORF-2019-X-P1B", "topic": "advanced-thermodynamic-systems", "subtopic": "mixed-advanced-systems"}, {"id": "M2020-11-P3", "topic": "advanced-thermodynamic-systems", "subtopic": "gas-driven-oscillations"}, {"id": "MAR-2011-XI-P3", "topic": "advanced-thermodynamic-systems", "subtopic": "hydrostatics-trapped-gas"}, {"id": "M2012-12-P2", "topic": "advanced-thermodynamic-systems", "subtopic": "hydrostatics-trapped-gas"}, {"id": "M2014-12-P3", "topic": "advanced-thermodynamic-systems", "subtopic": "pistons-coupled-chambers"}, {"id": "MAR-2015-XI-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "gasspring-systems"}, {"id": "MAR-2016-XI-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "pistons-coupled-chambers"}, {"id": "MAR-2017-XI-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "hydrostatics-trapped-gas"}, {"id": "MAR-2018-XI-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "gasspring-systems"}, {"id": "MAR-2019-XII-P2", "topic": "advanced-thermodynamic-systems", "subtopic": "gas-driven-oscillations"}, {"id": "MAR-2020-XI-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "hydrostatics-trapped-gas"}, {"id": "M2022-11-P5", "topic": "advanced-thermodynamic-systems", "subtopic": "gas-driven-oscillations"}, {"id": "M2023-12-P2", "topic": "advanced-thermodynamic-systems", "subtopic": "gas-driven-oscillations"}, {"id": "MAR-2024-XI-P2", "topic": "advanced-thermodynamic-systems", "subtopic": "gasspring-systems"}, {"id": "MAR-2025-XI-P2", "topic": "advanced-thermodynamic-systems", "subtopic": "gasspring-systems"}, {"id": "M2016-12-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "gasspring-systems"}, {"id": "ORF-2018-XII-P3", "topic": "advanced-thermodynamic-systems", "subtopic": "mixed-advanced-systems"}, {"id": "ORF-2019-XI-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "pistons-coupled-chambers"}, {"id": "M2022-12-P2", "topic": "advanced-thermodynamic-systems", "subtopic": "mixed-advanced-systems"}, {"id": "ORF-2023-XI-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "gas-driven-oscillations"}, {"id": "MAR-2023-XII-P2", "topic": "advanced-thermodynamic-systems", "subtopic": "gas-driven-oscillations"}, {"id": "ORF-2024-XI-P2", "topic": "advanced-thermodynamic-systems", "subtopic": "pistons-coupled-chambers"}, {"id": "S2024-12-P1", "topic": "advanced-thermodynamic-systems", "subtopic": "mixed-advanced-systems"}];
  const allIds = new Set(PROBLEMS.map(p => p.id));

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "[]");
      return new Set(Array.isArray(raw) ? raw.filter(x => allIds.has(x)) : []);
    } catch (_) { return new Set(); }
  }
  function save(set) {
    localStorage.setItem(KEY, JSON.stringify([...set].sort()));
  }
  function pct(n,d) { return d ? Math.round(100*n/d) : 0; }
  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(el => el.textContent = value);
  }
  function updateProgress(solved) {
    const total = PROBLEMS.length;
    const done = PROBLEMS.filter(p => solved.has(p.id)).length;
    setText("[data-progress-solved]", done);
    setText("[data-progress-total]", total);
    setText("[data-progress-percent]", pct(done,total) + "%");
    document.querySelectorAll("[data-progress-bar]").forEach(el => el.style.width = pct(done,total) + "%");

    document.querySelectorAll("[data-progress-topic]").forEach(el => {
      const topic = el.dataset.progressTopic;
      const items = PROBLEMS.filter(p => p.topic === topic);
      const n = items.filter(p => solved.has(p.id)).length;
      const percent = pct(n, items.length);
      el.querySelectorAll("[data-local-solved]").forEach(x=>x.textContent=n);
      el.querySelectorAll("[data-local-total]").forEach(x=>x.textContent=items.length);
      el.querySelectorAll("[data-local-percent]").forEach(x=>x.textContent=percent+"%");
      el.querySelectorAll("[data-local-bar]").forEach(x=>x.style.width=percent+"%");
    });

    document.querySelectorAll("[data-progress-subtopic]").forEach(el => {
      const [topic, subtopic] = el.dataset.progressSubtopic.split("/");
      const items = PROBLEMS.filter(p => p.topic === topic && p.subtopic === subtopic);
      const n = items.filter(p => solved.has(p.id)).length;
      const percent = pct(n, items.length);
      el.querySelectorAll("[data-local-solved]").forEach(x=>x.textContent=n);
      el.querySelectorAll("[data-local-total]").forEach(x=>x.textContent=items.length);
      el.querySelectorAll("[data-local-percent]").forEach(x=>x.textContent=percent+"%");
      el.querySelectorAll("[data-local-bar]").forEach(x=>x.style.width=percent+"%");
    });
  }

  function applyTableFilter(bank, solved) {
    const search = (bank.querySelector("[data-filter-search]")?.value || "").trim().toLowerCase();
    const diff = bank.querySelector("[data-filter-difficulty]")?.value || "";
    const comp = bank.querySelector("[data-filter-competition]")?.value || "";
    const hideSolved = bank.querySelector("[data-filter-hide-solved]")?.checked || false;
    let shown = 0;
    bank.querySelectorAll(".problem-row").forEach(row => {
      const hay = (row.dataset.search || "").toLowerCase();
      const ok = (!search || hay.includes(search))
        && (!diff || row.dataset.stars === diff)
        && (!comp || row.dataset.competition === comp)
        && (!hideSolved || !solved.has(row.dataset.problemId));
      row.hidden = !ok;
      if (ok) shown++;
    });
    const c = bank.querySelector("[data-filter-count]");
    if (c) c.textContent = `${shown} problem${shown===1?"":"s"} shown`;
  }

  function render() {
    const solved = load();
    document.querySelectorAll("[data-problem-check]").forEach(cb => {
      const checked = solved.has(cb.dataset.problemCheck);
      cb.checked = checked;
      cb.closest(".problem-row")?.classList.toggle("is-solved", checked);
    });
    document.querySelectorAll("[data-problem-bank]").forEach(bank => applyTableFilter(bank, solved));
    updateProgress(solved);
  }

  document.addEventListener("change", e => {
    const cb = e.target.closest("[data-problem-check]");
    if (cb) {
      const solved = load();
      cb.checked ? solved.add(cb.dataset.problemCheck) : solved.delete(cb.dataset.problemCheck);
      save(solved);
      render();
      return;
    }
    if (e.target.closest("[data-filter-difficulty], [data-filter-competition], [data-filter-hide-solved]")) render();
  });
  document.addEventListener("input", e => {
    if (e.target.closest("[data-filter-search]")) render();
  });
  document.addEventListener("click", e => {
    const reset = e.target.closest("[data-reset-progress]");
    if (reset) {
      if (confirm("Clear all solved checkmarks?")) {
        localStorage.removeItem(KEY);
        render();
      }
    }
  });
  window.addEventListener("storage", e => { if (e.key === KEY) render(); });
  document.addEventListener("DOMContentLoaded", render);
})();
