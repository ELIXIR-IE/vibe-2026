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
          <img src="./vibe25logo.png" alt="VIBE 2026 logo" class="mb-4" />
        </div>
        <p class="mx-auto mb-4 max-w-3xl text-center lg:text-xl">VIBE 2026</p>
        <p class="mx-auto max-w-3xl text-center text-muted-foreground lg:text-xl">
          Dates and venue to be announced
        </p>
        <p class="mx-auto mb-2 max-w-3xl text-center text-muted-foreground lg:text-xl">Ireland</p>
      </div>
      <div class="mt-6 flex justify-center gap-3">
        <Button
          disabled
          class="shadow-sm transition-shadow hover:shadow"
          href="#">Registration Opening Soon</Button
        >
        <Button
          disabled
          variant="outline"
          class="group"
          href="#">Abstract Submission Coming Soon</Button
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
      <p class="text-center text-muted-foreground lg:text-xl">Speaker announcements coming soon.</p>
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
      <p class="text-center text-muted-foreground lg:text-xl">Venue details coming soon.</p>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto mt-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">
      Conference Program
    </h2>
    <p class="text-center text-muted-foreground lg:text-xl">Program coming soon.</p>
  </div>
</section>

<br />

<section>
  <div class="container mx-auto mt-15 mb-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">
      ECR Meeting Program
    </h2>
    <p class="text-center text-muted-foreground lg:text-xl">Program coming soon.</p>
  </div>
</section>
