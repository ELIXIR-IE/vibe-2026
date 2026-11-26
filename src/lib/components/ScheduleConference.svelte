<script lang="ts">
  const rows = [
    { time: "9.00 – 10.00", event: "Registration & Tea/Coffee" },
    { time: "10.00 – 10.10", event: "Welcome and opening remarks, FTG11, Polaris" },
    { time: "10.10 – 10.20", event: "Talks from Sponsors, FTG11, Polaris" },
    { time: "10.20 – 11.00", event: "Keynote: Prof. Mary O'Connell, FTG11, Polaris" },
    { time: "11.00 – 12.00", event: "Session 1 – Evolution and population genetics, FTG11, Polaris", bold: true },
    { time: "12.00 – 12.15", event: "Break" },
    { time: "12.15 – 13.15", event: "Session 2 – Methods and Tools, FTG11, Polaris", bold: true },
    { time: "13.15 – 14.45", event: "Lunch and poster session, Polaris Mezzanine" },
    { time: "14.45 – 15.15", event: "CRT Alumnus Talk: Dr. Harrison Anthony, FTG11, Polaris" },
    { time: "15.15 – 16.15", event: "Session 3 – Medical Genetics and Precision Medicine, FTG11, Polaris", bold: true },
    { time: "16.15 – 16.45", event: "Tea/Coffee and poster session, Polaris Mezzanine" },
    { time: "16.45 – 17.45", event: "Session 4 – Microbial Genetics, FTG11, Polaris", bold: true },
    { time: "17.45 – 18.00", event: "Awards and Closing Remarks, FTG11, Polaris" },
    { time: "18.00", event: "Social Event – Nubar" },
  ];
</script>

<section>
  <div class="container mx-auto mt-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Conference Program</h2>
    <div class="mx-auto max-w-4xl overflow-hidden rounded-lg border">
      <div class="bg-slate-100 p-4 text-center text-xl font-semibold text-foreground">Thursday 3rd December 2026</div>
      {#each rows as row}
        <div class="flex flex-col gap-1 border-t p-4 sm:flex-row sm:gap-6">
          <div class="w-36 shrink-0 font-semibold text-muted-foreground">{row.time}</div>
          <div class="text-foreground {row.bold ? 'font-semibold' : ''}">{row.event}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
