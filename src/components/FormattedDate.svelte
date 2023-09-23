<script lang="ts">
    export let date: Date;

    let isValidDate = (d: any): d is Date => d instanceof Date && !isNaN(d.getTime());

    let formattedDate: string = '';
    let isoDate: string = '';

    $: if (isValidDate(date)) {
        formattedDate = date.toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        isoDate = date.toISOString();
    }
</script>

{#if isValidDate(date)}
    <time datetime={isoDate}>
        {formattedDate}
    </time>
{:else}
    <span>Invalid date</span>
{/if}
