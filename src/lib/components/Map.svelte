<script lang="ts">
  import { base } from "$app/paths";
</script>

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
      <div>
        <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Venue</h2>
        <p class="mx-auto mb-6 max-w-5xl text-center text-muted-foreground lg:text-xl">
          DCU Glasnevin Campus, Dublin, Ireland — Polaris Building, Room FTG11
        </p>

        <div class="mx-auto mt-10 max-w-3xl">
          <h3 class="mb-4 text-center text-2xl font-bold text-muted-foreground">Campus Map</h3>
          <img
            src="{base}/campus-map.png"
            alt="DCU Glasnevin campus map showing the Polaris Building, Lonsdale Building, Nubar and visitor car park"
            class="w-full rounded-lg border"
          />
          <p class="mt-4 text-muted-foreground">
            VIBE 2026 will take place in the <span class="font-semibold">Polaris Building</span>, directly next to the
            Collins Avenue entrance. A concurrent faculty research event is taking place in the
            <span class="font-semibold">Lonsdale Building</span>. VIBE attendees are welcome to visit the event to view
            posters and network. A space is booked in <span class="font-semibold">Nubar</span> for a social gathering for
            attendees from 6pm.
          </p>
          <h4 class="mt-6 mb-2 text-lg font-semibold text-foreground">Getting to DCU Glasnevin Campus</h4>
          <p class="mb-2 text-muted-foreground">
            <span class="font-semibold">Driving:</span> Parking is available for visitors in the multi-level car park, directly
            next to the Polaris Building, for a charge of 2 Euro per hour. The easiest way to get here is via the Collins
            Avenue entrance. The car park can fill up during term time so spaces cannot be guaranteed. Parking in other areas
            is only for staff and students with permits.
          </p>
          <p class="mb-2 text-muted-foreground">
            <span class="font-semibold">Bus, Ballymun Road:</span> E1, E2, 10, 70D
          </p>
          <p class="text-muted-foreground">
            <span class="font-semibold">Bus, Collins Avenue:</span> N4, 42D, 44, 70D, 104, 109D, 110D, 220, 901D
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.6122910931067!2d-6.256135769177702!3d53.38598624256094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670f00778602cf%3A0x8da4b7a77a1e044d!2sDCU%20Polaris%20Building!5e0!3m2!1sen!2sie!4v1787252558410!5m2!1sen!2sie"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Map showing DCU Polaris Building"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
