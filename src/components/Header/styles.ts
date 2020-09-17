import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  display: flex;
  width: 100%;
  height: 200px;
  background: rgba(0,0,0,0.1);

  position: fixed;
  z-index: 999;
`
