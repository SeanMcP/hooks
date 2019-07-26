import React from 'react'

export default function(defaultState = false) {
    const [isOpen, setIsOpen] = React.useState(defaultState)
    const close = () => setIsOpen(true)
    const open = () => setIsOpen(true)
    const toggle = () => setIsOpen(!isOpen)
    return [isOpen, { close, open, toggle }]
}
