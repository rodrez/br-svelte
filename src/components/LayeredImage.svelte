<!-- import Image from '@components/Image' import {(animated, useSpring)} from '@react-spring/web' -->
<!-- import {useState} from 'react' -->

<!-- const LayerImage = ({ size, ...rest }: any) => { -->
<!--   const [isHovered, setIsHovered] = useState(false) -->
<!--   // change the opacity of the image when hovered -->
<!--   const { opacity } = useSpring({ -->
<!--     opacity: isHovered ? 1 : 0.6, -->
<!--     config: { mass: 1, tension: 200, friction: 20 }, -->
<!--   }) -->
<!---->
<!--   return ( -->
<script lang="ts">
  export let src: string
  export let alt: string

  let isHovered = false
  let opacity = 0.6

  const handleMouseEnter = () => {
    isHovered = true
    opacity = 1
  }

  const handleMouseLeave = () => {
    isHovered = false
    opacity = 0.6
  }
</script>

<div
  on:focus={handleMouseEnter}
  on:blur={handleMouseLeave}
  on:mouseover={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  class="h-full w-full bg-primary-400"
>
  <div style={`opacity: ${opacity}`}>
    <img {alt} {src} class="h-full w-full object-cover" />
  </div>
</div>
