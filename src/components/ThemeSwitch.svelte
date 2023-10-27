<script lang="ts">
  import { spring } from "svelte/motion"

  export let checked = false
  let theme = "light"
  export let animationProperties = {
    dark: {
      circle: spring({ r: 9 }),
      mask: spring({ cx: "50%", cy: "23%" }),
      svg: spring({ transform: "rotate(40deg)" }),
      lines: spring({ opacity: 0 }),
    },
    light: {
      circle: spring({ r: 5 }),
      mask: spring({ cx: "100%", cy: "0%" }),
      svg: spring({ transform: "rotate(90deg)" }),
      lines: spring({ opacity: 1 }),
    },
    springConfig: spring({ mass: 4, tension: 250, friction: 35 }),
  }
  export let moonColor = "#1B59F7"
  export let sunColor = "#ffc107"
  // export let style

  let id = 0
  let uniqueMaskId = `circle-mask-${id}`

  const { circle, svg, lines, mask } =
    animationProperties[checked ? "dark" : "light"]

  // const svgContainerProps = spring(svg, animationProperties.springConfig)
  // const centerCircleProps = spring(circle, animationProperties.springConfig)
  // const maskedCircleProps = spring(mask, animationProperties.springConfig)
  // const linesProps = spring(lines, animationProperties.springConfig)
  const svgContainerProps = ""
  const centerCircleProps = ""
  const maskedCircleProps = ""
  const linesProps = ""

  function toggle() {
    console.log("toggle")
    checked = !checked
    theme = checked ? "light" : "dark"
  }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  color={checked ? moonColor : sunColor}
  fill="none"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke="currentColor"
  on:click={toggle}
  on:keyup={toggle}
  style={svgContainerProps}
>
  <mask id={uniqueMaskId}>
    <rect x="0" y="0" width="100%" height="100%" fill="white" />
    <circle style={maskedCircleProps} r="9" fill="black" />
  </mask>

  <circle
    cx="12"
    cy="12"
    fill={checked ? moonColor : sunColor}
    style={centerCircleProps}
    mask={`url(#${uniqueMaskId})`}
  />
  <g stroke="currentColor" style={linesProps}>
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </g>
</svg>
