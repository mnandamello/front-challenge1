import React, { useState } from 'react'

export default function PageProgresso() {
  const [step, setStep] = useState(1)

  const Steps = [1,2,3,4,5];
  return (
    <div>
      <div className="vertical">
        {Steps.map((item) => (
          <step key={item} index={item} active={step === item}/>
        ))}
      </div>
    </div>
  )
}
