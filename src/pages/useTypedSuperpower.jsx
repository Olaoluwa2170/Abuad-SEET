import { useEffect, useState } from 'react'

const Phase = {
    Typing: 'Typing',
    Pausing: 'Pausing',
    Deleting: 'Deleting',
  };

const TYPING_INTERVAL = 100
const PAUSE_MS = 1000
const DELETING_INTERVAL = 50

export const useTypedSuperpower = (Welcomes) => {
    const [SelectedIndex, setSelectedIndex] = useState(0)
    const [phase, setPhase] = useState(Phase.Typing)
    const[TypedWelcome, setTypedWelcome] = useState('')
    useEffect(()=>{
        switch (phase) {
            case Phase.Typing:{
                    const nextTypedWelcome = Welcomes[SelectedIndex].slice(0, TypedWelcome.length + 1)
                    if (nextTypedWelcome===TypedWelcome) {
                        setPhase(Phase.Pausing)
                        return
                        
                    }

                    const timeout = setTimeout(()=>{
                        setTypedWelcome(nextTypedWelcome)
                    }, TYPING_INTERVAL)

                    return () => clearTimeout(timeout)}
            case Phase.Deleting:{
                        
                        if (!TypedWelcome) {
                            const nextIndex = SelectedIndex + 1
                            setSelectedIndex(Welcomes[nextIndex] ? nextIndex : 0)
                            setPhase(Phase.Typing)
                            return                           
                        }
                        
                        const nextRemaining = Welcomes[SelectedIndex].slice(
                                                0, TypedWelcome.length - 1)

                        const timeout = setTimeout(()=>{
                            setTypedWelcome(nextRemaining)
                        }, DELETING_INTERVAL)
    
                        return () => clearTimeout(timeout)}

            case Phase.Pausing:
                const timeout = setTimeout(()=>{
                    setPhase(Phase.Deleting)
                }, PAUSE_MS)
        
                return () => clearTimeout(timeout)
            default:
                return
        }
        

    }, [Welcomes, TypedWelcome, SelectedIndex, phase])

    return {TypedWelcome, selectedWelcome: Welcomes[SelectedIndex]}
}

