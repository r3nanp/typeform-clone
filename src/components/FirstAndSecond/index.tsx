import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { Sticky } from '../../styles'

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])

  return (
    <Sticky className="second">
      <First />

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          borderRadius: '4px',
          border: '4px solid #fff',
          opacity: frameOpacity,
          scale: frameScale,
        }}
      />
    </Sticky>
  )
}

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  )

  return <Sticky className="first" style={{ scale: firstScale }}></Sticky>
}

export default FirstAndSecond
