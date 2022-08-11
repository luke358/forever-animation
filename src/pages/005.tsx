import React, { useRef, useState } from 'react'
import Paper from '../components/Paper'
import styles from '../styles/005.module.scss'
import Doodle from '../components/Doodle'
const RULES = [
  `:doodle {
    grid-gap: 1px;
    width: 600px; height: 600px;
  }
  background: hsl(@rn(360), 80%, 80%);
  transform: 
    scale(@rn(1.1, .3, 3)) 
    skew(@rn(-45deg, 45deg, 3));`,
  `:doodle {
    grid-gap: 1px;
    width: 600px; height: 600px;
    }
    background: hsl(@rn(360, 1, 2), @rn(50%, 80%, 3), 80%);
    border-radius: 0 50% 0 @p(0, 50%);
    transform: rotate(@p(0, 90deg, 180deg, 270deg));`,
  `:doodle {
      position: relative;
      @size: 600px;
      gap: 1px;
    }
    background: hsl(@rn(360, 1, 2), @rn(60%, 80%, 3), 80%);
    transform: rotate(@p(0, 90deg, 180deg, 270deg));
    @random {
      border-radius: 0 100% 0 0;
    }
    @random {
      border-radius: 50%;
      border: 10px solid #000;
    }
    @random {
      border-radius: 50%;
      border: 10px solid #000;
      mask: radial-gradient(transparent, transparent 25%, #000 27%, #000);
    }
    @random {
      border: 0;
      border-radius: 0;
      mask: conic-gradient(from 45deg, transparent, transparent 90deg, #000 90deg, #000 180deg, transparent 180deg, transparent 270deg, #000 270deg, #000);
    }
    @random {
      border: 0;
      border-radius: 0;
      mask: linear-gradient(45deg, #000, #000 50%, transparent 50%, transparent);
    }`,
]
export default function $005() {
  const [rule, setRules] = useState<number>(0)
  const doodleRef = useRef<any>(null)
  const changeRule = function () {
    const currentRule = (rule + 1) % RULES.length
    doodleRef.current!.update(RULES[currentRule])
    setRules(currentRule)
  }
  return (
    <Paper >
      <div className={styles.wraper} onClick={changeRule}>
        <Doodle ref={doodleRef} rule={RULES[rule]} />
      </div>
    </Paper>
  )
}
