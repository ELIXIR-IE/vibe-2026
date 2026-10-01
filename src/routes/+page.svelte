<script>
  import Button from "@/components/ui/button/button.svelte";
  import * as Card from "@/components/ui/card";
</script>

<section class="relative overflow-hidden py-32">
  <div class="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
    <img
      alt="background"
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
      class="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
    />
  </div>
  <div class="relative z-10 container mx-auto">
    <div class="mx-auto flex max-w-5xl flex-col items-center">
      <div>
        <div class="flex justify-center">
          <img src="./vibe26logo.png" alt="VIBE 2026 logo" class="mb-4" />
        </div>
        <p class="mx-auto mb-4 max-w-3xl text-center lg:text-xl">VIBE 2026</p>
        <p class="mx-auto max-w-3xl text-center text-muted-foreground lg:text-xl">3rd December 2026</p>
        <p class="mx-auto mb-2 max-w-3xl text-center text-muted-foreground lg:text-xl">
          DCU Glasnevin Campus, Dublin, Ireland
        </p>
      </div>
      <div class="mt-6 flex justify-center gap-3">
        <Button
          class="shadow-sm transition-shadow hover:shadow"
          href="https://app.oxfordabstracts.com/register/event/77953?preview=false"
          target="_blank">Register</Button
        >
        <Button variant="outline" href="https://app.oxfordabstracts.com/stages/82886/submitter" target="_blank"
          >Submit Abstract</Button
        >
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto mt-10">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Sponsors</h2>
    <div class="flex flex-col items-center justify-around space-y-10 lg:flex-row lg:space-y-0 lg:space-x-5">
      <Card.Root class="w-full max-w-sm border-1 border-slate-200 bg-slate-50">
        <Card.Content class="my-auto">
          <a href="https://www.vwr.com/ie/en/" target="_blank" class="flex h-40 items-center justify-center p-6">
            <img src="./vwr-logo.png" alt="VWR, part of Avantor" class="max-h-full max-w-full object-contain" />
          </a>
        </Card.Content>
      </Card.Root>
      <Card.Root class="w-full max-w-sm border-1 border-slate-200 bg-slate-50">
        <Card.Content class="my-auto">
          <div class="flex h-40 items-center justify-center">
            <p class="text-center text-muted-foreground">Sponsor opportunities coming soon</p>
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root class="w-full max-w-sm border-1 border-slate-200 bg-slate-50">
        <Card.Content class="my-auto">
          <div class="flex h-40 items-center justify-center">
            <p class="text-center text-muted-foreground">Sponsor opportunities coming soon</p>
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</section>

<section class="relative overflow-hidden px-2 pt-20 pb-4">
  <div class="relative z-10 container mx-auto">
    <div class="mx-auto flex max-w-5xl flex-col items-center">
      <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Keynote Speakers</h2>
      <div class="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:flex-row sm:items-start">
        <img
          src="./mary-oconnell.jpg"
          alt="Prof. Mary J. O'Connell"
          class="h-48 w-48 shrink-0 rounded-full object-cover"
        />
        <div class="text-center sm:text-left">
          <p class="mb-2 text-lg font-semibold text-foreground">Prof. Mary J. O'Connell</p>
          <p class="mb-3 text-muted-foreground">
            We are thrilled to welcome Prof. Mary J. O'Connell as our keynote speaker for this year's VIBE meeting!
            Having hosted VIBE at DCU nearly 17 years ago, Mary played a key role in shaping our conference's history.
            Welcoming her back to DCU and VIBE feels extraordinarily special.
          </p>
          <p class="mb-3 text-muted-foreground">
            Mary is an evolutionary genomicist whose research explores Phylogenomics, Evolutionary Theory, and
            Adaptation. Beyond her lab, she is an active leader in the global scientific community: an elected Fellow of
            the Linnean Society, and a long-time contributor to the Society for Molecular Biology and Evolution (SMBE),
            where she served as councillor and co-organised the annual international conference in Dublin in 2012.
          </p>
          <p class="mb-3 text-muted-foreground">
            Please join us in giving Prof. Mary O'Connell a very warm welcome back!
          </p>
          <a href="http://mol-evol.org/" target="_blank" class="font-semibold text-primary hover:underline"
            >Visit her lab page →</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<section class="relative overflow-hidden px-2 pt-20 pb-8">
  <div class="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
    <img
      alt="background"
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
      class="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
    />
  </div>
  <div class="relative z-10 container mx-auto">
    <div class="mx-auto flex max-w-5xl flex-col items-center">
      <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Venue</h2>
      <p class="text-center text-muted-foreground lg:text-xl">DCU Glasnevin Campus, Dublin, Ireland</p>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto mt-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Conference Program</h2>
    <p class="text-center text-muted-foreground lg:text-xl">Program coming soon.</p>
  </div>
</section>

<br />

<section>
  <div class="container mx-auto mt-15 mb-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">ECR Meeting Program</h2>
    <p class="text-center text-muted-foreground lg:text-xl">Program coming soon.</p>
  </div>
</section>
